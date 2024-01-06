"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Sayaboutus = () => {
  const testimonials = [
    {
      name: "John Doe",
      comment:
        "Tempora expedita et corporis assumenda enim unde molestias. Doloribus doloribus modi consequatur et. Distinctio consequuntur non doloremque. Praesentium deserunt eum vero. Omnis porro quae cum iste voluptas ut accusamus ut et. Aut nam aut nulla. Et consequuntur fuga eos in voluptas. Atque sit labo",
    },
    {
      name: "Jane Doe",
      comment:
        "Tempora expedita et corporis assumenda enim unde molestias. Doloribus doloribus modi consequatur et. Distinctio consequuntur non doloremque. Praesentium deserunt eum vero. Omnis porro quae cum iste voluptas ut accusamus ut et. Aut nam aut nulla. Et consequuntur fuga eos in voluptas. Atque sit labo",
    },
    {
      name: "Jane Doe",
      comment:
        "expedita et corporis assumenda enim unde molestias. Doloribus doloribus modi consequatur et. Distinctio consequuntur non doloremque. Praesentium deserunt eum vero. Omnis porro quae cum iste voluptas ut accusamus ut et. Aut nam aut nulla. Et consequuntur fuga eos in voluptas. Atque sit labo",
    },
    {
      name: "Jane Doe",
      comment:
        "expedita et corporis assumenda enim unde molestias. Doloribus doloribus modi consequatur et. Distinctio consequuntur non doloremque. Praesentium deserunt eum vero. Omnis porro quae cum iste voluptas ut accusamus ut et. Aut nam aut nulla. Et consequuntur fuga eos in voluptas. Atque sit labo",
    },

    // Add more testimonials as needed
  ];
  const [itemsPerPage, setItemsPerPage] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Small devices
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Medium devices
      } else {
        setItemsPerPage(2); // Larger devices
      }
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleTestimonials = testimonials.slice(startIndex, endIndex);

  const nextTestimonialsPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevTestimonialsPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="flex flex-row relative  w-full max-w-7xl ">
      <div className="absolute w-full h-full  bg-[#14213C]/80 -z-10 "></div>
      <div className="w-full h-full absolute -z-20">
        <Image
          src={`/image/sayabout.png`}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row w-full items-center gap-20 py-20 px-[20px] md:px-20">
        <div className="flex flex-col">
          <span className="font-alex text-[20px] text-white px-10">
            Testimonials
          </span>
          <h1 className="text-[#F9A21B] font-flat text-[24px]">
            WHAT OUR CLIENT <br /> SAY ABOUT US
          </h1>
          <span className="text-white font-flat max-w-[400px]">
            We are always interested in hearing your thoughts and hearing about
            your experiences. Here are some of our most devoted clients
            thoughts.
          </span>
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="flex flex-row gap-2 ">
            {visibleTestimonials.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-[#14213C] rounded-md flex flex-col"
              >
                <div className="flex flex-row gap-2">
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_28_96)">
                        <path
                          d="M7.686 11.4661C7.686 10.6831 7.47 10.0171 7.038 9.46809C6.381 8.64009 5.112 8.54109 4.374 8.70309C4.068 6.96609 5.544 4.75209 7.452 3.79809L5.985 1.74609C3.105 3.11409 0.279 6.26409 0.765 10.2331C1.071 12.7441 2.52 14.4001 4.572 14.4001C5.472 14.4001 6.219 14.1391 6.804 13.6081C7.398 13.0771 7.686 12.3661 7.686 11.4661ZM16.173 11.4661C16.173 10.6831 15.957 10.0171 15.525 9.46809C14.868 8.64009 13.599 8.54109 12.861 8.70309C12.555 6.96609 14.031 4.75209 15.939 3.79809L14.472 1.74609C11.592 3.11409 8.766 6.26409 9.252 10.2331C9.558 12.7441 11.007 14.4001 13.059 14.4001C13.959 14.4001 14.706 14.1391 15.291 13.6081C15.885 13.0771 16.173 12.3661 16.173 11.4661Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_28_96">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-white max-w-[300px] font-flat">
                    {item.comment}
                  </span>
                </div>
                {/* Additional content like name can be added here */}
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="w-full flex justify-end">
            <div className=" justify-end ">
              <button
                onClick={prevTestimonialsPage}
                className="text-white  cursor-pointer "
              >
                <svg
                  width="31"
                  height="25"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.25 12.4201C30.25 13.1162 29.7327 13.6915 29.0616 13.7825L28.875 13.7951L4.70433 13.794L13.4365 22.4905C13.9746 23.0263 13.9765 23.8969 13.4407 24.435C12.9536 24.9242 12.1898 24.9702 11.6506 24.572L11.4961 24.4392L0.404457 13.3952C0.333525 13.3246 0.271914 13.2481 0.219624 13.1674C0.204855 13.1431 0.189819 13.1183 0.175568 13.0929C0.162457 13.0712 0.15061 13.0486 0.139435 13.0258C0.123913 12.9926 0.108746 12.9583 0.0949764 12.9233C0.0837879 12.8963 0.0744457 12.87 0.0659237 12.8436C0.0557938 12.8108 0.0459518 12.7758 0.0374851 12.7403C0.0311909 12.7155 0.0262051 12.6917 0.0218582 12.6678C0.0157433 12.6321 0.0105381 12.5953 0.00682449 12.558C0.00361824 12.5295 0.001688 12.5013 0.000621796 12.4731C0.00034523 12.456 0 12.4381 0 12.4201L0.000688553 12.3668C0.00174141 12.3398 0.00358582 12.3129 0.00621986 12.286L0 12.4201C0 12.3333 0.00803566 12.2484 0.023407 12.1661C0.0269718 12.1465 0.0312195 12.1263 0.0359211 12.1062C0.0456886 12.0648 0.0569763 12.0249 0.069973 11.9859C0.0763531 11.9664 0.0837841 11.9457 0.0917282 11.9251C0.107796 11.8837 0.125259 11.8443 0.144474 11.8059C0.153399 11.7878 0.163397 11.7689 0.173864 11.7502C0.191048 11.7196 0.208748 11.6906 0.227467 11.6623C0.240673 11.6423 0.255297 11.6215 0.270569 11.601L0.282467 11.5851C0.319513 11.5367 0.359701 11.4909 0.402727 11.4478L0.404377 11.4465L11.496 0.400717C12.0341 -0.135141 12.9047 -0.133338 13.4406 0.404743C13.9277 0.893908 13.9705 1.65788 13.57 2.19534L13.4366 2.34928L4.708 11.044L28.875 11.0451C29.6344 11.0451 30.25 11.6607 30.25 12.4201Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonialsPage}
                className="text-white  cursor-pointer mt-2"
              >
                <svg
                  width="45"
                  height="25"
                  viewBox="0 0 75 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.30304 11.0458L70.2168 11.0458L61.3381 2.34937C60.7909 1.81356 60.789 0.942965 61.3338 0.404839C61.8291 -0.0843678 62.6057 -0.13039 63.1539 0.267849L63.311 0.40065L74.5888 11.4446C74.6609 11.5153 74.7236 11.5917 74.7767 11.6724C74.7917 11.6967 74.807 11.7216 74.8215 11.7469C74.8348 11.7687 74.8469 11.7913 74.8583 11.8141C74.874 11.8473 74.8895 11.8816 74.9035 11.9166C74.9148 11.9436 74.9243 11.9698 74.933 11.9963C74.9433 12.0291 74.9533 12.064 74.9619 12.0995C74.9683 12.1243 74.9734 12.1481 74.9778 12.1721C74.984 12.2077 74.9893 12.2446 74.9931 12.2819C74.9963 12.3103 74.9983 12.3385 74.9994 12.3667C74.9997 12.3838 75 12.4018 75 12.4197C75 12.4319 74.9999 12.444 74.9995 12.4561L74.9993 12.473C74.9983 12.5 74.9964 12.527 74.9937 12.5539L74.9939 12.549C74.9899 12.5912 74.984 12.6328 74.9762 12.6737C74.9726 12.6934 74.9683 12.7136 74.9635 12.7337C74.9536 12.775 74.9421 12.8149 74.9289 12.854C74.9224 12.8734 74.9148 12.8941 74.9068 12.9147C74.8904 12.9561 74.8727 12.9955 74.8531 13.034C74.8441 13.052 74.8339 13.0709 74.8232 13.0897C74.8058 13.1202 74.7878 13.1492 74.7687 13.1775C74.7553 13.1975 74.7404 13.2184 74.7249 13.2389L74.7128 13.2547C74.6752 13.3031 74.6343 13.349 74.5905 13.392L74.5889 13.3933L63.3111 24.4391C62.764 24.975 61.8788 24.9732 61.3339 24.4351C60.8386 23.9459 60.7951 23.182 61.2023 22.6445L61.338 22.4906L70.213 13.7958L0.30304 13.7958L0.30304 11.0458Z"
                    fill="#F9A21B"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sayaboutus;
