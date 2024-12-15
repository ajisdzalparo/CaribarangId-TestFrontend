import React, { useState } from "react";
import * as Icon from "react-feather";

export const InfoCard = (dataProduct) => {
  const [activeTab, setActiveTab] = useState("info");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsAnimating(false);
      }, 200);
    }
  };

  const descImage = [
    { path: "src/assets/desc_image1.png" },
    { path: "src/assets/desc_image2.png" },
    { path: "src/assets/desc_image3.png" },
    { path: "src/assets/desc_image4.png" },
    { path: "src/assets/desc_image5.png" },
    { path: "src/assets/desc_image6.png" },
  ];

  const renderContent = () => {
    if (activeTab === "info") {
      return (
        <div className="grid grid-rows-2 gap-2 lg:gap-4">
          <div className="flex items-center px-3 py-4 bg-[#EBF4FF] text-primary-0 gap-5 rounded-lg">
            <button>
              <Icon.AlertCircle />
            </button>
            <span className="font-medium text-xs lg:text-sm">
              Harga yang tertera dapat berubah sewaktu-waktu dan belum termasuk
              biaya ongkir sampai rumah kamu.
            </span>
          </div>
          <div className="flex items-center px-3 py-4 bg-[#EBF4FF] text-primary-0 gap-5 rounded-lg">
            <button>
              <Icon.AlertCircle />
            </button>
            <span className="font-medium text-xs lg:text-sm">
              Minimum pengiriman China - Indonesia (0.5 cbm by SEA dan 3 kg by
              AIR)
            </span>
          </div>
        </div>
      );
    } else if (activeTab === "deskripsi") {
      return (
        <div className="grid grid-rows-[auto_1fr] gap-4">
          <div className="grid grid-rows-[auto_1fr] gap-3">
            <h3 className="text-xs lg:text-base font-medium text-[#171717]">
              Deskripsi
            </h3>
            <div className="flex flex-col gap-2">
              <span className="text-xs lg:text-base font-medium text-[#747474]">
                Supplier :
                <span className="font-normal text-[#2B2B2B] ml-1">
                  灵岛工厂批发
                </span>
              </span>
              <span className="text-base font-medium text-[#747474]">
                Kategori : Fashion Bayi & Anak
              </span>
            </div>
          </div>
          <div className="grid grid-[auto_1fr] gap-5 rounded-lg">
            <h3 className="text-base font-medium text-[#171717]">
              Deskripsi Produk
            </h3>
            <div className="h-[650px] overflow-y-auto scrollbar-thin">
              {descImage.map((item, key) => (
                <img
                  className="mb-4 w-[98%]"
                  key={key}
                  src={item.path}
                  alt="Description Image"
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {/* Link Tabs */}
      <div className="flex gap-3 lg:gap-5 border-gray-200">
        <button
          className={`py-3 lg:py-4 text-xs lg:text-sm font-semibold ${
            activeTab === "info"
              ? "text-primary-0 border-b-2 border-primary-0"
              : "text-gray-500 border-b-2 border-transparent hover:text-primary-0"
          }`}
          onClick={() => handleTabChange("info")}
        >
          Info Penting
        </button>
        <button
          className={`py-3 lg:py-4 text-xs lg:text-sm font-semibold ${
            activeTab === "deskripsi"
              ? "text-primary-0 border-b-2 border-primary-0"
              : "text-gray-500 border-b-2 border-transparent hover:text-primary-0"
          }`}
          onClick={() => handleTabChange("deskripsi")}
        >
          Deskripsi
        </button>
      </div>

      {/* Animated Content */}
      <div
        className={`mt-2 lg:mt-4 transition-opacity duration-200 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderContent()}
      </div>

      {/* Cara Pemesanan (khusus tab Info Penting) */}
      {activeTab === "info" && (
        <div
          className={`mt-2 lg:mt-6 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="font-medium text-xs lg:text-base mb-4">
            Cara pemesanan di Caribarang
          </h1>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] p-4 ring-1 ring-[#E0E0E0] rounded-xl gap-2">
            <div
              className="flex w-full justify-center items-center flex-col cursor-default"
              title="Pilih produk dagangan"
            >
              <img src="/src/assets/step-1.svg" alt="Step 1" />
              <span className="text-xs lg:text-sm text-center line-clamp-2">
                Pilih produk dagangan
              </span>
            </div>
            <span className="w-8 h-0 border-2 border-[#E0E0E0] my-auto"></span>
            <div
              className="flex w-full justify-center items-center flex-col cursor-default"
              title="Pilih pembayaran"
            >
              <img src="/src/assets/step-2.svg" alt="Step 2" />
              <span className="text-xs lg:text-sm text-center line-clamp-2">
                Pilih pembayaran
              </span>
            </div>
            <span className="w-8 h-0 border-2 border-[#E0E0E0] my-auto"></span>
            <div
              className="flex w-full justify-center items-center flex-col cursor-default"
              title="Tunggu pesanan sampai di rumah"
            >
              <img src="/src/assets/step-3.svg" alt="Step 3" />
              <span className="text-xs lg:text-sm text-center line-clamp-2">
                Tunggu pesanan sampai di rumah
              </span>
            </div>
          </div>
          {/* Link Eksternal */}
          <a
            className="text-primary-0 underline text-xs md:text-md lg:text-base font-medium mt-6 block"
            href="https://www.1688.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat di 1688
          </a>
        </div>
      )}
    </>
  );
};
