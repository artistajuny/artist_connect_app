import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import AppLayout from "../components/AppLayout";
import { RiGoogleFill, RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
const Signin = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // 여기에서 실제 로그인 기능을 구현해야 합니다.
    // 간단한 예시로 콘솔에 출력하도록 하겠습니다.
    console.log("Id:", loginId);
    console.log("Password:", loginPassword);
    // 폼 제출 후 입력한 내용 초기화
    setLoginId("");
    setLoginPassword("");
  };

  return (
    <AppLayout>
      <div className={styles.login_container}>
        <div className={styles.login_form}>
          <h1 className={styles.login_title}>Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="Id"
              placeholder="Id"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              className={styles.login_input}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className={styles.login_input}
            />
            <div className={styles.submit_container}>
              <button type="submit" className={styles.login_button}>
                Login
              </button>
              <Link href="/signup" className={styles.login_button}>
                SignUp
              </Link>
            </div>
          </form>
          <div className={styles.sns_login}>
            <h2 className={styles.sns_login_title}>Login with SNS</h2>
            <div className={styles.sns_buttons}>
              <button className={styles.sns_button_kakao}>
                <RiKakaoTalkFill />
              </button>
              <button className={styles.sns_button_google}>
                <RiGoogleFill />
              </button>
              <button className={styles.sns_button_naver}>
                <SiNaver />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Signin;
