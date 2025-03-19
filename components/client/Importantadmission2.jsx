"use client";
import Link from "next/link";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Importantadmission2 = ({ data }) => {
  const handleMouseEnter = (swiper) => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = (swiper) => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  };

  return (
    <div className="slider-container mt-8 max-sm:mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay, Scrollbar]}
        breakpoints={{
          1280: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          625: { slidesPerView: 2 },
        }}
        onSwiper={(swiper) => {
          const slides = document.querySelectorAll(".swiper-slide");

          slides.forEach((slide) => {
            slide.addEventListener("mouseenter", () =>
              handleMouseEnter(swiper)
            );
            slide.addEventListener("mouseleave", () =>
              handleMouseLeave(swiper)
            );
          });
        }}
      >
        {data?.map((university, idx) => (
          <SwiperSlide key={idx} className="">
            <Link href={`/university/${university._id}`}>
              <div className="flex flex-col gap-4 items-center justify-center pb-4 px-2 w-full rounded-xl">
                <div className="h-[400px] w-[300px] relative">
                  <img
                    src={university.hrAdmissionNotice}
                    alt="Picture"
                    className="absolute top-0 left-0 w-full h-full object-cover box"
                    style={{
                      objectPosition: "center center", // Explicitly set position
                    }}
                  />
                </div>
                <div className="h-full my-auto flex flex-col gap-6 justify-center">
                  <h1 className="ImportantAdmissionUniversityName text-xs">
                    {university.name}
                  </h1>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Importantadmission2;
