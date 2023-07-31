import React, { useState, useEffect, forwardRef } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import data from "./data";
import styles from "../styles/Navigation.module.css";
const LinkWrapper = forwardRef(({ href, children }, ref) => (
  <Link href={href} ref={ref} legacyBehavior>
    {children}
  </Link>
));
const Navigation = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const { menuRef, searchRef } = props;

  const menuToggleHandler = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setMenuOpen(!menuOpen);
    }, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Here you can add the search logic
    console.log(`Search term: ${searchTerm}`);
    setSearchTerm("");
  };

  const searchToggleHandler = () => {
    setSearchVisible(!isSearchOpen);
    setTimeout(() => {
      setIsSearchOpen(!isSearchOpen);
    }, 0);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setIsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        setSearchVisible(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo_container}>
        <Link href="/" legacyBehavior>
          <a className="logo">Logo</a>
        </Link>
      </div>

      <form className={styles.search_container} onSubmit={handleSearch}>
        <FaSearch className={styles.search_icon} />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search_input}
          style={{ display: searchVisible ? "block" : "null" }}
        />
      </form>

      <div className={styles.search_icon2} onClick={searchToggleHandler}>
        {isSearchOpen ? "" : <FaSearch />}
      </div>

      <div
        ref={searchRef}
        className={`${styles.search_overlay} ${
          isSearchOpen ? styles.search_overlay_open : ""
        }`}
      >
        <div className={styles.search_icon3} onClick={searchToggleHandler}>
          {isSearchOpen ? <FaTimes /> : <FaSearch />}
        </div>
        <form
          className={styles.search_container_overlay}
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.search_input_overlay}
          />
          <button type="submit" className={styles.search_button_overlay}>
            <FaSearch />
          </button>
        </form>
      </div>

      <div className={styles.menuIcon} onClick={menuToggleHandler}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={menuOpen ? styles.mobile_menu_open : styles.menu}
        ref={menuRef}
      >
        {data.map((item) => (
          <li key={item.id} className={styles.menu_item}>
            {/* LinkWrapper 컴포넌트로 Link 감싸기 */}
            <LinkWrapper href={item.path} ref={ref}>
              <a>{item.title}</a>
            </LinkWrapper>
          </li>
        ))}
        <li className={styles.Login_wrap}>
          <Link href="/signin" legacyBehavior>
            <a>
              <FaSignInAlt />
            </a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a>
              <FaUserPlus />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
});
export default Navigation;
