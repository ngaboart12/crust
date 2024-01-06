import React from "react";
import HorizontalScrollWithPagination from "./HorizontalScrollWithPagination";

export const Ourservice = () => {
  return (
    <div className="w-full pl-[20px] md:pl-[85px] py-20">
      <div className="flex flex-col  items-center">
        <span className=" font-alex text-[20px]">What we offer</span>
        <h1 className="text-[#F9A21B] font-flat text-[24px]">OUR SERVICES</h1>
      </div>
      <HorizontalScrollWithPagination />
    </div>
  );
};
