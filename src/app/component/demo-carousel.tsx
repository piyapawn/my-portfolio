'use client'
import React from "react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export default function DemoCarousel() {
  return (
    <div id="carousel" className="max-w-[744px] min-w-[350px] h-fit m-auto p-8">
      <h1 className="text-3xl text-center text-[#344054] my-4">Work experiences</h1>
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <video className="min-w-[350px] rounded-xl border-4 border-blue-500/50" controls muted>
            <source src="/video/animals-gone.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video className="min-w-[350px] rounded-xl border-4 border-blue-500/50" controls muted>
            <source src="/video/world-wide-web.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
