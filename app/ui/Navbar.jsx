"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="flex flex-row relative justify-between items-center py-4 w-full max-w-7xl px-[20px] md:px-[85px]">
      {/* phone side bar */}
      <div className="flex w-full items-center flex-row justify-between md:hidden">
        <a href="/" className="w-[100px] h-10 ">
          <Image
            src={`/image/logo.png`}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </a>
        <div onClick={() => setIsopen(!isOpen)}>
          {isOpen ? (
            <IoClose color="white" size={40} />
          ) : (
            <FiMenu color="white" size={40} />
          )}
        </div>
      </div>

      <div
        className={`md:hidden flsex flex-col gap-10 bg-white h-[100vh] absolute top-0 py-10 left-0 transition-all  ${
          isOpen ? "w-1/2 px-10 " : "px-0 w-0"
        }`}
      >
        <a
          href="/"
          className={`w-[100px] h-[40px] flex ${isOpen ? "flex" : "hidden"}`}
        >
          <Image
            src={`/image/logo.png`}
            width={200}
            height={200}
            className="w-full h-full object-fit"
          />
        </a>
        <div
          className={`p-2 text-black flex flex-col gap-6 mt-10 text-[16px] font-flat ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a href="#" className="">
            Home
          </a>
          <a href="#">About us</a>
          <a href="#">Service</a>
          <a href="#">Portfolio</a>
        </div>
      </div>

      <a href="/" className="w-[100px] h-10 hidden md:flex">
        <Image
          src={`/image/logo.png`}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </a>
      <div className="p-2 bg-white  flex-row gap-6 text-[14px] hidden md:flex font-flat">
        <a href="#" className="">
          Home
        </a>
        <a href="#">About us</a>
        <a href="#">Service</a>
        <a href="#">Portfolio</a>
      </div>
    </div>
  );
};
