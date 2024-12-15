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
      <div className="fixed bottom-[10%] right-[5%] hover:scale-[1.1] transition-all ease-in-out duration-200 bg-[#10B981] p-1 lg:p-2 rounded-full">
        <a href="https://wa.link/2abz7v">
          <img src="/src/assets/whatsapp-icon.svg" type="svg+xml" />
        </a>
      </div>
    </>
  );
};
