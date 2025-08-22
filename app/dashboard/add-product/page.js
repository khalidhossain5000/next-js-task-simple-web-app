import React from "react";

const page = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#EFEBE3] flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-[#111111] mb-6 text-center">
            Add New Product
          </h2>

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#111111] mb-1">
                Product Name
              </label>
              <input
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
                placeholder="Enter product description"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179800]"
              ></textarea>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-[#111111] mb-1">
                Photo URL
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179800]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer w-full bg-[#179800] text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
