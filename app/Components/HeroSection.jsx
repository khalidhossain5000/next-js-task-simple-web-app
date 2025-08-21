import React from "react";
import heroImg from "../../assets/hero-vegetables.png";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="bg-[#EFEBE3]  min-h-screen">

      <div className="container mx-auto flex flex-col justify-center items-center pt-12  lg:pt-16">
        <h2 className="text-xl md:text-2xl lg:text-[56px] text-[#111111] font-semibold">
          Freshness <span className="text-[#179800]">You Can</span>
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-[56px] text-[#111111] font-semibold">
          <span className="text-[#179800]">Count </span>On,Prices You'll Love!
        </h2>
        <p className="lg:text-xl text-[#111111]">
          Shop your daily essentials at unbeatable prices. From fresh produce to
          pantry staples, we’ve got you covered every day!
        </p>
        <div>
          <Image src={heroImg} className="w-[80%] mx-auto h-full object-contain"></Image>
        </div>
      </div>


    </div>
  );
};

export default HeroSection;
