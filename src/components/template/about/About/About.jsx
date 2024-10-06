"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";

function About() {
  return (
    <section className="block mt-12">
      <div className="container">
        <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="block">
            <div className="block mx-auto bg-white  py-8 rounded-lg">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                // initialSlide={1}
                className="mySwiper swiperCard"
              >
                <SwiperSlide>
                  <h6 className="block font-iranBold text-2xl">من کی ام ؟</h6>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="block text-lg mb-3">اسم چی ؟</span>
                  <h6 className="block font-iranBold text-2xl">
                    محمدمهدی دالوندی
                  </h6>
                  <p className="block mx-auto text-center mt-5">
                    متولد آبان 79 هستم , الان 2 سالی داخل حوزه فرانت مشغول کارم
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="block text-lg mb-3">چه مهارت هایی دارم</span>
                  <p className="block w-full mx-auto text-center mt-5">
                    مثل خیلیا داخل این حوزه
                    <br />
                    HTML,CSS,JAVASCRIPT,REACT,
                    <br />
                    NEXT,BOOTSTRAP,TAILWIND
                    <br />
                    تخصص های که دارم
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                <p className="block mx-auto text-center mt-5">
                    یکسری پروژه های انجام دادم که میتونی داخل بخش پروژه ها ببینی
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="block">
            <img src="/assets/images/me.webp" alt="" className="block w-full h-[420px] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
