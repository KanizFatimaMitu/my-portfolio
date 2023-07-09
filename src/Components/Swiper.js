import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a target="_blank" href="https://dream-home-1d288.web.app/">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://coffeeshop-72f50.web.app/">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://code-with-me-53590.web.app/">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://6465075553f1df16016b36aa--tangerine-basbousa-065a39.netlify.app/">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
