'use client'
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { ProjectType } from "../model/DataType";
import ProjectInfos from "@/app/data/project-Information";

export default function DemoCarousel() {
  function renderImgSlide(gallery: ProjectType) {
    return (
      <SwiperSlide>
        <Image
          src={gallery?.imgSrc}
          width={680}
          height={200}
          alt={gallery?.projectName}
        />
      </SwiperSlide>
    )
  }

  return (
    <div id="carousel" className="max-w-[744px] min-w-[350px] h-fit m-auto p-8">
      <h1 className="text-3xl text-center text-[#344054] my-4">Work experiences</h1>
      <Swiper navigation={true} modules={[Navigation]} className="">
        {ProjectInfos?.map((eachItem: ProjectType) => renderImgSlide(eachItem))}
      </Swiper>
      <div className="flex items-center mt-4">
        <button className="m-auto w-full h-[40px] p-2 rounded-xl bg-blue-300/50 hover:bg-blue-500/50 cursor-pointer text-[#344054]">
          View more
        </button>
      </div>
    </div>
  );
}
