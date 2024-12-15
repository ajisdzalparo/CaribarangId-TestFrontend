import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { ButtonPrimary, ButtonSecondary } from "./Button";
import { useGlobalContext } from "../context";

// Components
import Slider from "./Slider";
import { ProductDetail } from "./ProductDetail";
import { CardProducts } from "./CardProducts";

// Data
import Products from "../products.json";

export const Product = () => {
  const [sliderData, setSliderData] = useState([]);
  const { totalHarga } = useGlobalContext();

  useEffect(() => {
    const formattedData = Products.product.slider.map((item) => ({
      type: item.path.endsWith(".mp4") ? "video" : "image",
      src: item.path,
    }));
    setSliderData(formattedData);
  }, []);

  const dataCardProduct = [
    {
      image: "product1.jpg",
      title:
        "27kids European And American Children's Clothing Summer New Products Boy Short Sleeve T-Shirt Wholesale Baby Clothes Manufacturers One Piece Consignment Sales",
      price: 14370,
      supplier: "山东维美食品有限公司",
      moq: 2,
      flag: "taobao.svg",
    },
    {
      image: "product2.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur. A tempor et pellentesque ornare",
      price: 14670,
      supplier: "山东维美食品有限公司",
      moq: 2,
      flag: "taobao.svg",
    },
    {
      image: "product3.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur. A tempor et pellentesque ornare",
      price: 15024,
      supplier: "山东维美食品有限公司",
      moq: 2,
      flag: "taobao.svg",
    },
    {
      image: "product4.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur. A tempor et pellentesque ornare",
      price: 14790,
      supplier: "山东维美食品有限公司",
      moq: 2,
      flag: "taobao.svg",
    },
    {
      image: "product5.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur. A tempor et pellentesque ornare",
      price: 19029,
      supplier: "山东维美食品有限公司",
      moq: 2,
      flag: "taobao.svg",
    },
    {
      image: "product6.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur. A tempor et pellentesque ornare",
      price: 12092,
      supplier: "山东维美食品有限公司",
      moq: 2,
      flag: "taobao.svg",
    },
  ];

  const ongkirChina = Products.product.desc.ongkir;
  const ongkirPerKg = Products.product.desc.ongkir_to_indonesia;
  const HandlingFree = (totalHarga * 5) / 100;

  return (
    <div className="container mx-auto mt-4">
      {/* Grid Utama */}
      <div className="grid grid-cols-1 2xl:grid-cols-[1fr_25rem] gap-6 lg:gap-12">
        {/* Bagian Kiri */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 bg-white rounded-md lg:rounded-2xl p-4 sm:p-6 lg:p-9">
          <Slider sliderData={sliderData} />
          <ProductDetail productDetail={Products} />
        </div>

        {/* Bagian Kanan */}
        <div className="relative">
          <div className="relative w-full bg-white rounded-md lg:rounded-2xl p-4 sm:p-6">
            <h2 className="text-sm sm:text-xl font-bold mb-4">
              Ringkasan Harga Paket
            </h2>
            <div className="flex flex-col gap-4 border-t border-gray-200 py-4">
              <div className="flex justify-between text-xs md:text-sm lg:text-base">
                <h4>Harga Product X O</h4>
                <span className="font-bold">
                  Rp. {totalHarga.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between text-xs md:text-sm lg:text-base">
                <h4>Handling Free 5%</h4>
                <span className="font-bold">
                  {`Rp ${
                    totalHarga <= 0 ? "-" : HandlingFree.toLocaleString("id-ID")
                  }`}
                </span>
              </div>
              <div className="flex justify-between text-xs md:text-sm lg:text-base">
                <h4>Ongkir Lokal China</h4>
                <span className="flex gap-2 font-bold">
                  {`Rp ${
                    totalHarga <= 0 ? "-" : ongkirChina.toLocaleString("id-ID")
                  }`}
                  <Icon.AlertCircle className="text-primary-0" />
                </span>
              </div>
              <div className="flex justify-between text-xs md:text-sm lg:text-base">
                <h4>Ongkir China Ke Indonesia</h4>
                <span className="flex gap-2 font-bold">
                  {`Rp ${
                    totalHarga !== 0
                      ? ongkirPerKg.toLocaleString("id-ID")
                      : " -"
                  }`}
                  <Icon.AlertCircle className="text-primary-0" />
                </span>
              </div>
            </div>
            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <ButtonSecondary
                icon={Icon.Heart}
                label="Favorite"
                classes="flex justify-center"
              />
              <ButtonPrimary
                icon={Icon.ShoppingCart}
                label="+Keranjang"
                classes="flex justify-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Products */}
      <CardProducts
        heading="Produk lainnya di toko ini"
        products={dataCardProduct}
      />
      <CardProducts
        heading="Produk serupa untuk Anda"
        products={dataCardProduct}
      />
    </div>
  );
};
