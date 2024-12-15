import React from "react";

export const MenuLink = () => {
  return (
    <div className="container px-1 lg:px-4">
      <div className="flex gap-1 text-xs md:text-base font-medium leading-4 mt-20 lg:mt-28 w-7xl text-[#747474]">
        <a href="#" className="text-primary-0" to="/">
          Home
        </a>
        {">"}
        <a href="#" className="text-primary-0" to="#">
          Product
        </a>
        {">"}
        <a
          href="#"
          to="/"
          className="w-[300px] text-ellipsis whitespace-nowrap overflow-hidden"
          style={{ display: "inline-block", maxWidth: "300px" }}
        >
          27kids European And American Children's Clothing Summer New Products
          Boy Short Sleeve T-Shirt Wholesale Baby Clothes Manufacturers One
          Piece Consignment Sales
        </a>
      </div>
    </div>
  );
};
