"use client";
import React, { useEffect, useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Image from "next/image";
import { createPortal } from "react-dom";
import "./test.css";
import SwiperButton from "./SwiperButton";

const testimonials = [
  {
    img: (
      <Image
        src={`/image/wedding1.png`}
        className="w-full h-full object-cover"
        width={1000}
        height={1000}
      />
    ),
    name: "FRED $ ISIMBI",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: (
      <Image
        src={`/image/wedding2.png`}
        className="w-full h-full object-cover"
        width={400}
        height={400}
      />
    ),
    name: "Jane Doe",
    comment:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: (
      <Image
        src={`/image/wedding1.png`}
        className="w-full h-full object-cover"
        width={400}
        height={400}
      />
    ),
    name: "Jane Doe",
    comment:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: (
      <Image
        src={`/image/wedding2.png`}
        className="w-full h-full object-cover"
        width={400}
        height={400}
      />
    ),
    name: "Jane Doe",
    comment:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: (
      <Image
        src={`/image/wedding1.png`}
        className="w-full h-full object-cover"
        width={400}
        height={400}
      />
    ),
    name: "Jane Doe",
    comment:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more testimonials as needed
];
const Modal = ({ children, closeModal }) => {
  return createPortal(
    <div className="modal-overlay" onMouseDown={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>,
    document.body
  );
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleResize = () => {
    const width = window.innerWidth;

    // Adjust slidesPerView based on screen width
    if (width < 768) {
      setSlidesPerView(2);
    } else if (width < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    // Add any additional setup logic if needed

    // Set initial slidesPerView based on the screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-white relative py-10">
      <div className=" absolute w-full md:w-1/2 bg-[#14213C] h-full  "></div>
      <div className="py-20">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            scale: 1,
            slideShadows: false,
          }}
          onSlideChange={handleSlideChange}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              onClick={() => openModal(testimonial.img)}
              key={index}
              className="swiper-slide   "
            >
              <div className=" rounded-md flex flex-col items-center px-4 ">
                {index === activeIndex ? (
                  <div
                    className={` text-white text-start w-full  flex flex-col ${
                      index === activeIndex ? "visible" : "hidden"
                    }`}
                  >
                    <span className="text-white font-alex">
                      The wedding party
                    </span>
                    <p className="font-bold text-lg font-flat">
                      {testimonial.name}
                    </p>
                  </div>
                ) : (
                  <div
                    className={` text-white text-start w-full  flex flex-col ${
                      index !== activeIndex ? "visible opacity-0" : "hidden"
                    }`}
                  >
                    <span className="text-white font-alex">
                      The wedding party
                    </span>
                    <p className="font-bold text-lg font-flat">
                      {testimonial.name}
                    </p>
                  </div>
                )}

                <div className="flex flex-row gap-2 w-full h-[200px]">
                  {testimonial?.img}
                </div>
                <div
                  className={` text-white text-start w-full  flex flex-col ${
                    index === activeIndex ? "visible" : "hidden"
                  }`}
                ></div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperButton />
        </Swiper>
        {modalIsOpen && <Modal closeModal={closeModal}>{selectedImage}</Modal>}
      </div>
    </div>
  );
};

export default Slider;
