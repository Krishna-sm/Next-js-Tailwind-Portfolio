import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { Button } from "@mui/material";

export default function FeedBack() {
  return (
    <>
      <section id="feedback">
        <div className="dark:bg-gray-900 bg-white  dark:text-white">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="dark:bg-gray-900 bg-white">
              <div className="py-10 flex flex-col justify-center items-center">
                <Image
                  src={
                    "https://krishna-web.vercel.app/media/project/expence.png"
                  }
                  alt="expence"
                  width={10000}
                  height={1000}
                  className="object-cover  object-center px-3 transition-all duration-500"
                />
                <div className="dark:bg-white  text-gray-900 gap-y-2  flex justify-center items-center px-4 flex-col">
                  <p className="text-gray-900  text-base sm:text-2xl font-serif">
                    Project Name: MERN Expence Management System{" "}
                  </p>
                  <p className="text-zinc-500 text-base">
                    using react and Bootstrap css
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="dark:bg-gray-900 bg-white">
              <div className="py-10 flex flex-col justify-center items-center">
                <Image
                  src={
                    "https://krishna-web.vercel.app/media/project/leadstrack.png"
                  }
                  alt="expence"
                  width={10000}
                  height={1000}
                  className="object-cover object-center px-3 transition-all duration-500"
                />
                <div className="dark:bg-white text-gray-900 gap-y-2  flex justify-center items-center px-4 flex-col">
                  <p className="text-gray-900 text-base sm:text-2xl font-serif">
                    Project Name: LeadsTrack Digital Marketing{" "}
                  </p>
                  <p className="text-zinc-500 text-base">
                    Using PHP and MySQL tailwind and Bootstrap css
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="dark:bg-gray-900 bg-white">
              <div className="py-10 flex flex-col justify-center items-center">
                <Image
                  src={"https://krishna-web.vercel.app/media/project/movie.png"}
                  alt="expence"
                  width={10000}
                  height={1000}
                  className="object-cover object-center px-3 transition-all duration-500"
                />
                <div className="dark:bg-white text-gray-900 gap-y-2  flex justify-center items-center px-4 flex-col">
                  <p className="text-gray-900 text-base sm:text-2xl font-serif">
                    Project Name: Movie Website{" "}
                  </p>
                  <p className="text-zinc-500 text-base">Using React</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="dark:bg-gray-900 bg-white">
              <div className="py-10 flex flex-col justify-center items-center">
                <Image
                  src={"https://krishna-web.vercel.app/media/project/ratm.png"}
                  alt="expence"
                  width={10000}
                  height={1000}
                  className="object-cover object-center px-3 transition-all duration-500"
                />
                <div className="dark:bg-white text-gray-900 gap-y-2  flex justify-center items-center px-4 flex-col">
                  <p className="text-gray-900 text-base sm:text-2xl font-serif">
                    Project Name: RATM portfoilo{" "}
                  </p>
                  <p className="text-zinc-500 text-base">
                    Using React and Tailwind
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="dark:bg-gray-900 bg-white">
              <div className="py-10 flex flex-col justify-center items-center">
                <Image
                  src={"/port.png"}
                  alt="expence"
                  width={10000}
                  height={1000}
                  className="object-cover object-center px-3 transition-all duration-500"
                />
                <div className="dark:bg-white text-gray-900 gap-y-2  flex justify-center items-center px-4 flex-col">
                  <p className="text-gray-900 text-base sm:text-2xl font-serif">
                    Project Name: My Portfolio{" "}
                  </p>
                  <p className="text-zinc-500 text-base">
                    Using React and Boostrap
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="dark:bg-gray-900 bg-white">
              <div className="py-10 flex flex-col justify-center items-center">
                <Image
                  src={"https://krishna-web.vercel.app/media/project/food.png"}
                  alt="expence"
                  width={10000}
                  height={1000}
                  className="object-cover object-center px-3 transition-all duration-500"
                />
                <div className="dark:bg-white text-gray-900 gap-y-2  flex justify-center items-center px-4 flex-col">
                  <p className="text-gray-900 text-base sm:text-2xl font-serif">
                    Project Name: Food Website{" "}
                  </p>
                  <p className="text-zinc-500 text-base">Using PHP MySQL</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
