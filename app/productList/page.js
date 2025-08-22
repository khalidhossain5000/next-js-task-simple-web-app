"use client";
import React from "react";
import products from "./productData";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-[#EFEBE3]">
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#179800] lg:text-4xl lg:pb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="relative w-full h-24 mb-4 bg-[#EFEBE3] rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
              
                className="mx-auto"
                priority={true} // Optional: load immediately
              />
            </div>
            <div className="text-center">
                <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-[gray-600] mb-2">{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
             {/* Details Button */}
            <Link
              href={`/productList/${product.id}`}
              
              className="mt-2 inline-block w-full text-center py-2 rounded-lg bg-[#179800] text-white font-semibold hover:bg-green-700 transition"
            >
              View Details
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default page;
