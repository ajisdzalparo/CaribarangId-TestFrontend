import React, { useState } from "react";
import * as Icon from "react-feather";

// Components
import { ButtonPrimary } from "./Button";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Toggle Cart Dropdown
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Data cart
  const cartItems = [
    {
      id: 1,
      image: "/src/assets/cart1.png",
      name: "27kids European And American Children's Clothing Summer New Products Boy Short Sleeve T-Shirt Wholesale Baby Clothes Manufacturers One Piece Consignment Sales",
      quantity: 500,
      price: "Rp 2.538.000",
    },
    {
      id: 2,
      image: "/src/assets/cart2.png",
      name: "Pajamas Woman Winter Flannel Korean Version Long Sleeve Thick Stuffed Coral Fleece Cute Autumn Winter Homewear Set Women-Ladies Loungewear",
      quantity: 1000,
      price: "Rp 50.189.000",
    },
    {
      id: 3,
      image: "/src/assets/cart3.png",
      name: "Bayilu Brand Discount Women's Clothing Wholesale Spring Dress Clearance Cut Standard Removal Physical Store To Go To The Source Of Goods",
      quantity: 500,
      price: "Rp 12.950.000",
    },
    {
      id: 4,
      image: "/src/assets/cart4.png",
      name: "Bayilu Brand Discount Women's Clothing Wholesale Spring Dress Clearance Cut Standard Removal Physical Store To Go To The Source Of Goods",
      quantity: 500,
      price: "Rp 16.950.000",
    },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
      {/* Navbar Container */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <img
          src="/src/assets/logo.svg"
          alt="Logo"
          className="w-32 md:w-40 lg:w-48"
        />

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex h-[40px] w-[50%]">
          <div className="flex items-center w-full px-3 ring-1 ring-gray-300 focus-within:ring-primary-0 rounded-s-lg overflow-hidden">
            <input
              className="h-full w-full text-sm focus:outline-none placeholder:font-normal placeholder:text-gray-500"
              type="text"
              placeholder="Cari kata kunci atau copy link 1688.com"
            />
            <Icon.Camera className="cursor-pointer text-gray-500" />
          </div>
          <button className="py-2 px-5 bg-primary-0 h-full ring-1 ring-primary-0 rounded-e-lg text-white text-sm">
            <Icon.Search className="text-white" />
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <div className="hidden lg:flex relative cursor-pointer">
            <img
              src="/src/assets/heart-icon.svg"
              alt="Wishlist"
              className="w-6 h-6"
            />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-xs text-white px-1 rounded-full">
              1
            </span>
          </div>

          {/* Cart */}
          <div
            className="hidden lg:flex relative cursor-pointer"
            onClick={toggleCart}
          >
            <img
              src="/src/assets/bag-icon.svg"
              alt="Cart"
              className="w-6 h-6"
            />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-xs text-white px-1 rounded-full">
              {cartItems.length}
            </span>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute top-[300%] right-0 p-4 bg-white rounded-lg shadow-lg z-50">
                <div className="p-4 border-b">
                  <h2 className="font-semibold text-lg">
                    Keranjang ({cartItems.length})
                  </h2>
                  <a href="#" className="text-blue-500 text-sm hover:underline">
                    Lihat Keranjang
                  </a>
                </div>
                <div className="max-h-60 w-[40rem] overflow-y-auto scrollbar-thin">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center p-4 space-x-6 border-b last:border-b-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div className="ml-4 flex-1 w-64">
                        <p className="text-sm font-medium truncate text-nowrap text-ellipsis">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Quantity {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-red-500">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Login Button */}
          <ButtonPrimary label="Masuk" classes="hidden lg:flex" />

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isActive ? <Icon.X /> : <Icon.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="container flex flex-col items-start p-4">
          <input
            className="w-full mb-4 p-2 text-sm border rounded-md outline-none"
            type="text"
            placeholder="Search here..."
          />
          <a href="#" className="py-2 text-gray-700">
            Wishlist
          </a>
          <a href="#" className="py-2 text-gray-700">
            Cart
          </a>
          <a href="#" className="py-2 text-gray-700">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
