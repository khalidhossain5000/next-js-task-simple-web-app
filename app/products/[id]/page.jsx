"use client";
import React from "react";
import products from "../productData";
import Image from "next/image";

const page = ({ params }) => {
  const p = React.use(params); // unwrap the promise
  const { id } = p;
  const product = products.find((item) => item.id.toString() === id);
  console.log(product);
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFEBE3]">
        <p className="text-[#111111] text-2xl">Product not found!</p>
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-screen bg-[#EFEBE3] py-10">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 bg-white rounded-lg shadow-lg p-6">
          {/* Product Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={product.image.src}
              alt={product.name}
              width={100}
              height={200}
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#111111]">
                {product.name}
              </h1>
              <p className="text-xl font-semibold text-[#179800] mt-2">
                ৳ {product.price}
              </p>
              <p className="text-[#111111] mt-4">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
