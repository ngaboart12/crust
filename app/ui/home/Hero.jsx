import React from "react";
import Image from "next/image";
import { Navbar } from "../Navbar";

export const Hero = () => {
  return (
    <div className="flex relative flex-col w-full h-[100vh] justify-between">
      <div className=" absolute w-full h-full -z-10">
        <Image
          src={`/image/hero.png`}
          width={1000}
          height={1000}
          alt="Home section"
          className="w-full h-full object-cover"
        />
      </div>
      <Navbar />

      <div className="w-full px-[10px] md:px-[80px] flex flex-row justify-between">
        <div className="flex flex-col gap-2 p-5 bg-white w-full md:w-1/2">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-[#F9A21B] font-alex text-[24px]">
              Crust events
            </h1>
            <svg
              width="112"
              height="6"
              viewBox="0 0 112 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 5.5H112L96 0.5H0V5.5Z" fill="#D9D9D9" />
            </svg>
          </div>
          <h1 className="font-noval max-w-[450px] font-bold text-black">
            A top notch event management company offering state-of-the-art
            services
          </h1>
          <button className="p-2 bg-[#14213C] font-flat text-white w-[120px] mt-2">
            Book now
          </button>
        </div>
        {/* <div className="p-4  fixed  right-[] md:right-10 flex flex-col gap-2 items-center">
          <svg
            width="6"
            height="93"
            viewBox="0 0 6 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 93H5.5V14.6601L0.5 0V93Z" fill="#F9A21B" />
          </svg>
          <div className="flex flex-col gap-2">
            <a href="#">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 19.1333C14.5 19.1333 13.2 17.9333 13.2 16.3333C13.2 14.8333 14.4 13.5333 16 13.5333C17.5 13.5333 18.8 14.7333 18.8 16.3333C18.8 17.8333 17.5 19.1333 16 19.1333Z"
                  fill="#F9A21B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.4 9.53333H12.6C11.8 9.63333 11.4 9.73333 11.1 9.83333C10.7 9.93333 10.4 10.1333 10.1 10.4333C9.86261 10.6707 9.75045 10.9081 9.61489 11.195C9.57916 11.2707 9.5417 11.3499 9.5 11.4333C9.48453 11.4797 9.46667 11.5285 9.44752 11.5809C9.34291 11.8667 9.2 12.2571 9.2 12.9333V19.7333C9.3 20.5333 9.4 20.9333 9.5 21.2333C9.6 21.6333 9.8 21.9333 10.1 22.2333C10.3374 22.4707 10.5748 22.5829 10.8617 22.7184C10.9374 22.7542 11.0165 22.7916 11.1 22.8333C11.1464 22.8488 11.1952 22.8667 11.2475 22.8858C11.5333 22.9904 11.9238 23.1333 12.6 23.1333H19.4C20.2 23.0333 20.6 22.9333 20.9 22.8333C21.3 22.7333 21.6 22.5333 21.9 22.2333C22.1374 21.9959 22.2495 21.7586 22.3851 21.4716C22.4209 21.396 22.4583 21.3168 22.5 21.2333C22.5155 21.1869 22.5333 21.1381 22.5525 21.0858C22.6571 20.8 22.8 20.4096 22.8 19.7333V12.9333C22.7 12.1333 22.6 11.7333 22.5 11.4333C22.4 11.0333 22.2 10.7333 21.9 10.4333C21.6626 10.1959 21.4252 10.0838 21.1383 9.94822C21.0627 9.91252 20.9833 9.875 20.9 9.83333C20.8536 9.81786 20.8048 9.8 20.7525 9.78086C20.4667 9.67624 20.0762 9.53333 19.4 9.53333ZM16 12.0333C13.6 12.0333 11.7 13.9333 11.7 16.3333C11.7 18.7333 13.6 20.6333 16 20.6333C18.4 20.6333 20.3 18.7333 20.3 16.3333C20.3 13.9333 18.4 12.0333 16 12.0333ZM21.4 11.9333C21.4 12.4856 20.9523 12.9333 20.4 12.9333C19.8477 12.9333 19.4 12.4856 19.4 11.9333C19.4 11.381 19.8477 10.9333 20.4 10.9333C20.9523 10.9333 21.4 11.381 21.4 11.9333Z"
                  fill="#F9A21B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5.33334C0 2.57191 2.23858 0.333336 5 0.333336H27C29.7614 0.333336 32 2.57191 32 5.33334V27.3333C32 30.0948 29.7614 32.3333 27 32.3333H5C2.23858 32.3333 0 30.0948 0 27.3333V5.33334ZM12.6 8.03333H19.4C20.3 8.13333 20.9 8.23333 21.4 8.43333C22 8.73333 22.4 8.93333 22.9 9.43333C23.4 9.93333 23.7 10.4333 23.9 10.9333C24.1 11.4333 24.3 12.0333 24.3 12.9333V19.7333C24.2 20.6333 24.1 21.2333 23.9 21.7333C23.6 22.3333 23.4 22.7333 22.9 23.2333C22.4 23.7333 21.9 24.0333 21.4 24.2333C20.9 24.4333 20.3 24.6333 19.4 24.6333H12.6C11.7 24.5333 11.1 24.4333 10.6 24.2333C10 23.9333 9.6 23.7333 9.1 23.2333C8.6 22.7333 8.3 22.2333 8.1 21.7333C7.9 21.2333 7.7 20.6333 7.7 19.7333V12.9333C7.8 12.0333 7.9 11.4333 8.1 10.9333C8.4 10.3333 8.6 9.93333 9.1 9.43333C9.6 8.93333 10.1 8.63333 10.6 8.43333C11.1 8.23333 11.7 8.03333 12.6 8.03333Z"
                  fill="#F9A21B"
                />
              </svg>
            </a>
          
            <a href="#">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5.66667C0 2.90525 2.23858 0.666672 5 0.666672H27C29.7614 0.666672 32 2.90525 32 5.66667V27.6667C32 30.4281 29.7614 32.6667 27 32.6667H5C2.23858 32.6667 0 30.4281 0 27.6667V5.66667ZM8.2 13.9667V24.6667H11.6V13.9667H8.2ZM8 10.5667C8 11.6667 8.8 12.4667 9.9 12.4667C11 12.4667 11.8 11.6667 11.8 10.5667C11.8 9.46667 11 8.66667 9.9 8.66667C8.9 8.66667 8 9.46667 8 10.5667ZM20.6 24.6667H23.8V18.0667C23.8 14.7667 21.8 13.6667 19.9 13.6667C18.2 13.6667 17 14.7667 16.7 15.4667V13.9667H13.5V24.6667H16.9V18.9667C16.9 17.4667 17.9 16.6667 18.9 16.6667C19.9 16.6667 20.6 17.1667 20.6 18.8667V24.6667Z"
                  fill="#F9A21B"
                />
              </svg>
            </a>
           
            <a href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                  fill="#F9A21B"
                />
              </svg>
            </a>
          </div>
        </div> */}
      </div>
      <div></div>
    </div>
  );
};
