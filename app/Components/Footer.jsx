import React from "react";
import footerlogo from "../../assets/logo-footer.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#179800] py-12 md:py-24">
      <div className="container mx-auto">
        <div>
          <Image src={footerlogo} className="w-full"></Image>
          <p className="lg:text-xl text-white ">
            Discover a world of treats, toys, and essentials handpicked for your
            furry friends
          </p>
        </div>
        <div>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Product</Link>
              <Link href={"/"}>Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Follow Us</h2>
          <div>
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
