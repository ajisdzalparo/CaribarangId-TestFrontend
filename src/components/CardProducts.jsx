import React from "react";

export const CardProducts = ({ heading, products }) => {
  return (
    <div className="mt-10 lg:mt-24">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xs lg:text-2xl font-bold">{heading}</h1>
        <a href="/products" className="text-xs text-primary-0 font-medium">
          Lihat Semua
        </a>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 lg:gap-2 gap-1">
        {products.map((item, key) => (
          <div
            key={key}
            className="relative w-full p-3 sm:max-w-xs rounded-md lg:rounded-xl border bg-white border-[#E0E0E0] hover:border-primary-0 hover:shadow-lg transition-all duration-500 cursor-pointer shadow-sm overflow-hidden"
          >
            <img
              src={item.image ? `./images/${item.image}` : "/default-image.png"}
              alt={item.title}
              className="relative w-full h-28 lg:h-64 object-cover"
            />
            <img
              className="absolute top-0 left-0 w-12 lg:w-24 h-auto"
              src={`/src/assets/${item.flag}`}
              alt="Taobao"
            />
            <div className="p-2 lg:p-4">
              <h3 className="text-xs lg:text-base font-semibold text-gray-800 overflow-hidden line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 lg:mt-2">{item.desc}</p>
              <span className="text-xs lg:text-lg font-semibold text-blue-500">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(item.price)}
              </span>
              <div className="mt-2 lg:mt-4 flex gap-1 lg:gap-5 justify-between items-start">
                <span className="font-normal text-[0.6rem] lg:text-sm text-[#AAAAAA]">
                  {item.supplier}
                </span>
                <span className="text-[0.6rem] lg:text-sm font-medium text-nowrap text-[#AAAAAA]">
                  {`Min Order ${item.moq}`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
