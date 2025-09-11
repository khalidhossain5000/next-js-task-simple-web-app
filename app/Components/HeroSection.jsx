import React from "react";
import heroImg from "../../assets/hero-vegetables.png";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="bg-[#EFEBE3] dark:bg-dark-primary  min-h-screen">

      <div className="container mx-auto flex flex-col md:justify-center items-center pt-6 md:pt-12  lg:pt-16">
        <h2 className="text-xl md:text-2xl lg:text-[56px] text-[#111111] dark:text-dark-accent font-semibold">
          Freshness <span className="text-[#179800] dark:text-dark-text">You Can</span>
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-[56px] text-[#111111] dark:text-dark-accent font-semibold">
          <span className="text-[#179800] dark:text-dark-text">Count </span>On,Prices You'll Love!
        </h2>
        <p className="text-sm px-2 md:px-0 pt-2 md:pt-0 lg:text-xl text-[#111111] dark:text-dark-text text-center">
          Shop your daily essentials at unbeatable prices. From fresh produce to
          pantry staples, we’ve got you covered every day!
        </p>
        <div>
          <Image src={heroImg} alt="hero-image" className="w-[100%] md:w-[100%] mx-auto h-full"></Image>
        </div>
      </div>


    </div>
  );
};

export default HeroSection;
