import React, { useRef } from "react";
import propTypes from "prop-types";
import Navigation from "./Navigation";

const AppLayout = ({ children }) => {
  // useRef를 이용하여 menuRef와 searchRef 생성
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  return (
    <>
      {/* Navigation 컴포넌트에 menuRef와 searchRef를 전달 */}
      <Navigation menuRef={menuRef} searchRef={searchRef} />
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
