import Image from "next/image";
import React from "react";
import p1 from "../../assets/onion.png";
import p2 from "../../assets/tomato.png";
const ProductHiglights = () => {
  return (
    <div className="bg-[#ffffff] py-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-[#179800] text-xl md:text-2xl lg:text-[36px] text-center lg:text-left">
          Product Highlights
        </h2>
        <div>
          <div className="left-card bg-gradient-to-r from-[#53DB3A] to-[#ffffff] rounded-lg p-3 lg:p-5">
            <h3>30% Off</h3>
            <p>
              Discover a world of treats, toys, and essentials handpicked for{" "}
            </p>
            <button className="hidden md:block py-[10px] px-[30px] text-black bg-[#ffffff] rounded-lg text-xl">
              Buy Now
            </button>
          </div>
          <div className="right-cards">
            {/* card-1 */}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p1} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>
            {/* card-2*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>
            {/* card-3*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

            {/* card-4*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

            {/* card-5*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>


{/* card-5*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>



{/* card-5*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>


{/* card-5*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
                  See More
                </button>
              </div>
            </div>

{/* card-5*/}
            <div className="bg-[#efebe3] flex items-center gap-3 rounded-xl">
              <div className="imgs">
                <Image src={p2} className="w-36"></Image>
              </div>
              <div className="contensts space-y-1">
                <h3 className="text-black font-medium text-xl">Onion</h3>
                <h5 className="text-black font-medium">$399.99</h5>
                <button className="hidden md:block py-2 px-6 text-white bg-[#179800] rounded-lg lg:text-xl">
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
