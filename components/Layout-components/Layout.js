import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LjpContainer from "./LjpContainer";
const Layout = (props) => {
  return (
    <div>
      <Header />
      <LjpContainer>{props.children}</LjpContainer>
      <Footer />
    </div>
  );
};
export default Layout;
