import Image from "next/image";
import React from "react";
import p1 from "../../assets/onion.png";
import p2 from "../../assets/tomato.png";
const ProductHiglights = () => {
  return (
    <div className="bg-[#ffffff] py-12 lg:py-24">
      <div className="container mx-auto px-3 lg:px-0">
        <h2 className="text-[#179800] text-xl md:text-2xl lg:text-[36px] text-center lg:text-left font-semibold py-6 md:py-12">
          Product Highlights
        </h2>

        <div className="flex flex-col md:flex-row  gap-6 ">
          <div className=" left-card bg-gradient-to-br from-[#53DB3A]  to-[#ffffff] rounded-lg p-3 lg:p-5">
            <div className="pt-12">
                <h3 className="text-white font-bold text-xl md:text-3xl">30% Off</h3>
            <p className="text-[#111111]  py-3">
              Discover a world of treats, toys, and essentials handpicked for{" "}
            </p>
            <button className="  py-[10px] px-[30px] text-black bg-[#ffffff] rounded-lg text-xl">
              Buy Now
            </button>
            </div>
          </div>
          <div className="right-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* card-1 */}
            <div className="bg-[#efebe3] flex flex-col lg:flex-row items-center gap-3 rounded-xl p-3">
              <div className="imgs">
                <Image src={p1} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-1 px-5 lg:px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>
            {/* card-2*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>
            {/* card-3*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg ">
                  See More
                </button>
              </div>
            </div>

            {/* card-4*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

            {/* card-5*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

            {/* card-6*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

            {/* card-7*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

            {/* card-8*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

            {/* card-9*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-24"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="  py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProductHiglights;
