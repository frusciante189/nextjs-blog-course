import React from "react";
import { ThemeProvider } from "../context/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageHead from "./PageHead";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <PageHead />
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
