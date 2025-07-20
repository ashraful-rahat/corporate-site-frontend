"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
    aria-label="Next"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
    aria-label="Previous"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    cssEase: "linear",
  };

  const bannerImages = [
    "/images/banner/banner.jpg",
    "/images/banner/banner1.jpg",
    "/images/banner/banner2.jpg",
  ];

  return (
    <div className="mx-auto max-w-8xl px-4 py-0">
      {/* Removed rounded-xl and reduced height by 20% (from 400px to 320px) */}
      <div className="relative h-[620px] overflow-hidden shadow-lg">
        <Slider {...settings}>
          {bannerImages.map((imagePath, index) => (
            <div key={index} className="relative h-[620px]">
              <Image
                src={imagePath}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
