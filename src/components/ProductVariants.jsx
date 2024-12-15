import React, { useState, useEffect } from "react";
import { Plus, Minus } from "react-feather";
import { useGlobalContext } from "../context";

export const ProductVariants = ({ productVariants, ongkir, beratBarang }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const { variants } = productVariants.product;
  const { setTotalHarga, setTotalQty } = useGlobalContext();

  // Menggunakan objek untuk menyimpan kuantitas per varian
  const [qty, setQty] = useState(
    variants.reduce((acc, variant) => {
      acc[variant.id] = Array.from({ length: variant.item.length }, () => 0);
      return acc;
    }, {})
  );

  const calculateTotalPrice = () => {
    const total = variants[selectedVariant].item.reduce(
      (acc, item, index) => acc + item.price * qty[selectedVariant][index],
      0
    );
    setTotalHarga(total);
  };

  // Fungsi untuk menangani perubahan kuantitas
  const handleQuantityChange = (index, value) => {
    setQty((prev) => ({
      ...prev,
      [selectedVariant]: prev[selectedVariant].map((qty, i) =>
        i === index ? Math.max(0, qty + value) : qty
      ),
    }));
  };

  // Fungsi untuk menangani pemilihan varian produk
  const handleVariantClick = (id) => {
    setSelectedVariant(id);
  };

  useEffect(() => {
    calculateTotalPrice();
    console.log(qty[selectedVariant]);
  }, [qty, selectedVariant]);

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {/* Judul */}
      <h1 className="text-xs text-center xl:text-start font-medium lg:text-base text-[#171717]">
        Pilih varian warna yang Anda inginkan
      </h1>

      {/* Pilihan Gambar */}
      <div className="flex justify-center xl:justify-start gap-4">
        {variants.map((variant) => (
          <img
            key={variant.id}
            src={variant.image}
            alt={`Varian ${variant.id}`}
            className={`w-10 h-10 lg:w-14 lg:h-14 rounded-lg cursor-pointer ${
              selectedVariant === variant.id && "ring-2 ring-primary-0"
            }`}
            onClick={() => handleVariantClick(variant.id)}
          />
        ))}
      </div>

      {/* Detail Varian Terpilih */}
      <div className="h-64 overflow-y-auto scrollbar-thin">
        {variants[selectedVariant].item.map((item, index) => (
          <div
            key={index}
            className="flex flex-col py-1 px-4 border border-gray-300 rounded-lg mb-4 w-[98%]"
          >
            {/* Nama Produk dan Harga */}
            <div className="flex justify-between">
              <h3 className="font-medium text-xs lg:text-sm text-gray-800">
                {item.name}
              </h3>
              <span className="font-semibold text-xs lg:text-sm text-[#0E4E9B]">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(item.price)}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              {/* Stok Produk */}
              <p className="text-xs">
                Stok:
                <span className="font-bold text-red-500 ml-2">
                  {item.stock.toLocaleString("en-US")}
                </span>
              </p>

              {/* Kontrol Jumlah */}
              <div className="flex text-xs items-center lg:gap-2 border border-gray-300 rounded-md px-2 py-[0.1rem] lg:px-3 lg:py-1">
                <button
                  onClick={() => handleQuantityChange(index, -1)}
                  className="text-gray-500"
                >
                  <Minus className="w-4 text-xs" />
                </button>
                <input
                  type="number"
                  value={qty[selectedVariant][index]}
                  onChange={(e) =>
                    handleQuantityChange(
                      index,
                      parseInt(e.target.value) - qty[selectedVariant][index] ||
                        0
                    )
                  }
                  className="w-10 text-center outline-none"
                  min="0"
                />
                <button
                  onClick={() => handleQuantityChange(index, 1)}
                  className="text-primary-0"
                >
                  <Plus className="w-4 text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
