import React, { useState, useEffect } from "react";
import { ThemeProvider } from "../context/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageHead from "./PageHead";
import useWindowSize from "./useWindowSize";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const size = useWindowSize();

  useEffect(() => {
    if (isOpen && size.width > 1024) {
      setIsOpen(false);
    }
  }, [size.width]);

  useEffect(() => {
    if (isOpen && size.width < 1024) {
      router.events.on("routeChangeStart", () => setIsOpen(false));
    }
    return () => {
      if (isOpen && size.width < 1024) {
        router.events.off("routeChangeStart"), () => setIsOpen(false);
      }
    };
  }, [isOpen, router]);

  return (
    <ThemeProvider>
      <PageHead />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`transition-all duration-500 ease-in-out transform ${
          isOpen ? "mr-[30%] md:mr-[10%] sm:mr-[15%]" : ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
