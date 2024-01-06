"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const HorizontalScrollWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const eventData = [
    {
      id: 1,
      imageUrl: "/image/service1.png",
      name: "Weeding Events",
    },
    {
      id: 2,
      imageUrl: "/image/service2.png",
      name: "Corporate Events",
    },
    {
      id: 3,
      imageUrl: "/image/service3.png",
      name: "Private Events",
    },
    {
      id: 4,
      imageUrl: "/image/service4.png",
      name: "Workshops and Training",
    },
    {
      id: 5,
      imageUrl: "/image/service1.png",
      name: "Workshops and Trainin",
    },
    {
      id: 6,
      imageUrl: "/image/service2.png",
      name: "Workshops and Trainin",
    },
  ];

  const totalItems = eventData.length;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Responsive items per page

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Small devices
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Medium devices
      } else {
        setItemsPerPage(4); // Larger devices
      }
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const visibleItems = eventData.slice(startIdx, endIdx);

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className={`grid grid-cols-${itemsPerPage} w-full gap-10 pt-10`}>
        {visibleItems.map((event) => (
          <div
            key={event.id}
            className="items-center gap-4 rounded-md flex flex-col h-[380px]"
          >
            <div className="w-full h-[80%]">
              <Image
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
            </div>
            <h1 className="text-[20px] font-flat">{event.name}</h1>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "px-10" : "px-5"
          } py-1 bg-yellow-500 text-white rounded disabled:opacity-50 ml-2`}
        >
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "px-10" : "px-5"
          } py-1 bg-yellow-500 text-white rounded disabled:opacity-50 ml-2`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollWithPagination;
