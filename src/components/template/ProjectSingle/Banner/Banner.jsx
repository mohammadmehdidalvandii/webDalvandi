"use client";
import React , { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation , Autoplay} from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Banner({images}) {
    const swiperRef = useRef(null)


  return (
    <section className="block mb-12 w-full">
        <div className="container">
        <Swiper
        ref={swiperRef}
       navigation={{
        nextEl: `.btn_next`,
        prevEl: `.btn_prev`,
       }}
       modules={[Navigation ,Autoplay]}
       autoplay={true}
       slidesPerView={1}
       spaceBetween={10}
       className="swiperNavi">
        {images.map((img , index)=>(
        <SwiperSlide key={index}>
            <img src={img} alt="banner project" className="block w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-2 mt-10">
            <button className="btn_next">
                <IoIosArrowForward/>
            </button>
            <button className="btn_prev">
                <IoIosArrowBack/>
            </button>
      </div>
        </div>
    </section>
  );
}

export default Banner;
