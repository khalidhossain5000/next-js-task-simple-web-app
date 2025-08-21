import React from "react";
import footerlogo from "../../assets/logo-footer.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#179800] py-12 md:py-24">
      <div className="container mx-auto flex items-center flex-col lg:flex-row justify-between lg:px-3 xl:px-0">
        <div className="">
          <Image src={footerlogo} alt="footer-logo" className="w-24 mx-auto lg:mx-0"></Image>
          <p className="lg:text-xl text-white lg:w-9/12 pt-3 md:py-4 lg:pt-6 text-center lg:text-left">
            Discover a world of treats, toys, and essentials handpicked for your
            furry friends
          </p>
        </div>

        <div className="md:flex-2">
          <ul className="flex flex-col pt-3 gap-3 md:pt-0 lg:gap-6 text-white">
            <li>
              <Link href={"/"}>Home</Link>
           
            </li>
            <li>
              <Link href={"/"}>Home</Link>
           
            </li>
            <li>
              <Link href={"/"}>Home</Link>
           
            </li>
          </ul>
        </div>

        <div className="md:flex-1">
          <h2 className="lg:text-xl text-white text-center lg:text-left pt-6">Follow Us</h2>
          <div className="flex items-center gap-6 text-2xl text-white pt-3">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
