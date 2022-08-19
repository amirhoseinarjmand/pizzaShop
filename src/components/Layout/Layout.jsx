import React from "react";

// components
import { Header, Footer, BackToTop } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
