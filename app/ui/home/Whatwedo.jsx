import React from "react";
import Image from "next/image";

export const Whatwedo = () => {
  return (
    <div className="px-[20px] md:px-[100px] py-20 w-full max-w-7xl flex flex-col md:flex-row gap-10 items-center">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <svg
            width="131"
            height="4"
            viewBox="0 0 131 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.00189209 2H131.002"
              stroke="#F9A21B"
              stroke-width="4"
            />
          </svg>
          <h1 className="text-[24px] text-[#F9A21B] font-flat leading-6 font-light ">
            Discover who we are and <br /> what we do
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start w-full">
          <span className="text-[16px] font-flat text-center md:text-start text-black">
            At Crust Events, we combined our knowledge, experience, and deep
            domain expertise to become the connoisseur of events thus
            establishing your crème de la crème event management company.
          </span>
          <span className="text-[16px] font-flat text-black">
            We phenomenally serve clients of any scale around Rwanda and the
            globe at large. From growing startups, SMEs, NGOs, individuals,
            celebrities, high level people to well-known corporate companies.
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-row gap-4">
        <div className="flex flex-col gap-10 w-1/2">
          <div className="w-full">
            <Image
              src={`/image/whatwedo1.png`}
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="w-full h-[2px] bg-[#F9A21B]"></div>
        </div>
        <div className="flex flex-col gap-10 w-1/2">
          <div className="w-full h-[2px] bg-[#F9A21B]"></div>
          <div className="w-full">
            <Image
              src={`/image/whatwedo2.png`}
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
