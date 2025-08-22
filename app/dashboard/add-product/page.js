"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, description, photoUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          title: "Error!",
          text: data.error || "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#179800",
          background: "#EFEBE3",
          color: "#111111",
        });
      } else {
        Swal.fire({
          title: "Success!",
          text: "Product saved successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#179800",
          background: "#EFEBE3",
          color: "#111111",
        });

        // ফর্ম reset
        setName("");
        setPrice("");
        setDescription("");
        setPhotoUrl("");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Network Error!",
        text: "Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#179800",
        background: "#EFEBE3",
        color: "#111111",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EFEBE3] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center">
          Add New Product
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-1">
              Product Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179800]"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-1">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179800]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179800]"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-1">
              Photo URL
            </label>
            <input
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              type="text"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179800]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full bg-[#179800] text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
