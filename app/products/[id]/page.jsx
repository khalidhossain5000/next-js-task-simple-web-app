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
    <div className="min-h-screen bg-[#EFEBE3] flex items-center justify-center p-6">
  <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-xl shadow-md p-8 max-w-6xl w-full">
    {/* Product Image */}
    <div className="flex-1 flex justify-center items-center">
      <Image
        src={product.image.src}
        alt={product.name}
        width={100}      // ছোট কিন্তু quality ঠিক রাখার জন্য
        height={100}
        className="rounded-lg object-contain"
      />
    </div>

    {/* Product Details */}
    <div className="flex-1 flex flex-col justify-center space-y-4">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <p className="text-[#111111] font-semibold">Name:</p>
        <h1 className="text-xl font-bold text-[#111111]">{product.name}</h1>
      </div>

      <div>
        <p className="text-[#111111] font-semibold">Price:</p>
        <p className="text-xl font-semibold text-[#179800]">৳ {product.price}</p>
      </div>

      <div>
        <p className="text-[#111111] font-semibold">Description:</p>
        <p className="text-[#111111]">{product.description}</p>
      </div>
    </div>
  </div>
</div>

  </div>

  );
};

export default page;
