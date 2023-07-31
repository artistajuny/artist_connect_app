import { createContext, useContext, useEffect, useState } from "react";
import { pool } from "../mysql/schema";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      pool.query(
        "SELECT * FROM users WHERE token = ?",
        [token],
        (err, results) => {
          if (err) throw err;
          if (results.length === 1) {
            setUser(results[0]);
          } else {
            localStorage.removeItem("token");
          }
        }
      );
    }
  }, []);

  function login(email, password) {
    return new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, results) => {
          if (err) return reject(err);
          if (results.length === 1) {
            const user = results[0];
            localStorage.setItem("token", user.token);
            setUser(user);
            resolve(user);
          } else {
            reject(new Error("Invalid email or password"));
          }
        }
      );
    });
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return {
    user,
    login,
    logout,
  };
}
