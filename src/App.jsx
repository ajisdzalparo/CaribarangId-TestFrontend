import React from "react";

// Components
import { Navbar } from "./components/Navbar";
import { MenuLink } from "./components/MenuLink";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <MenuLink />
      <Product />
      <Footer />
    </>
  );
};
