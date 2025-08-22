"use client"
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo-header.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Products</Link>
      </li>
      <li>
        <Link href="/dashboard/add-product">Add Products</Link>
      </li>
    </>
  );

  const { data: session, status } = useSession();

  return (
    <div className=" bg-[#EFEBE3] ">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <div className="flex flex-col gap-3">
                <button className=" py-1 px-5 border-1 border-[#179800] rounded-sm text-sm">
                  Login
                </button>
                <button className="py-1 px-5 text-white bg-[#179800] rounded-sm text-sm">
                  Register
                </button>
              </div>
            </ul>
          </div>
          <div className="hidden md:block">
            <Link href="/">
              <Image src={logo} alt="logo" width={150}></Image>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
        </div>
        <div className="navbar-end space-x-6">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <>
              <span className="text-[#111111] font-semibold">
                {session.user.name}
              </span>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-3 py-1 bg-[#179800] text-white rounded-lg cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-6">
              <Link href={"/Login"} className="cursor-pointer">
                <button className="cursor-pointer hidden md:block py-[10px] px-[30px] border-1 border-[#179800] rounded-lg text-xl">
                  Login
                </button>
              </Link>
              <Link href={"/register"} className="cursor-pointer">
                <button className="cursor-pointer hidden md:block py-[10px] px-[30px] text-white bg-[#179800] rounded-lg text-xl">
                  Register
                </button>
              </Link>
            </div>
          )}

          <div className="md:hidden">
            <Link href="/">
              <Image src={logo} alt="logo" width={150}></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
