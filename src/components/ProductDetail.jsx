import React from "react";
import { ProductVariants } from "./ProductVariants";
import { InfoCard } from "./InfoCard";

export const ProductDetail = ({ productDetail, ongkir, beratBarang }) => {
  const Data = productDetail.product.discount;
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-xs md:text-md lg:text-base font-bold">
            {productDetail.product.title}
          </h1>

          <div className="grid grid-cols-3 text-center py-2 lg:py-3 ring-1 ring-[#E0E0E0] rounded-xl">
            {Data.map((item, key) => (
              <div
                key={key}
                className={`w-full ${
                  key == 1 &&
                  "border-l-[1px] border-r-[1px] border-[#747474]/30"
                }`}
              >
                <h3 className="text-xs text-primary-0 font-bold lg:text-lg">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(item.price)}
                </h3>
                <span className="font-normal text-xs lg:text-base text-[#747474]">
                  &gt;= {item.min_order} pcs
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Variant */}
        <ProductVariants
          productVariants={productDetail}
          ongkir={ongkir}
          beratBarang={beratBarang}
        />

        {/* Info Card */}
        <InfoCard />
      </div>
    </>
  );
};
