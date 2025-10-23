import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import HeroSlide from "./HeroSlide";

const HeroSwiper = ({ slides }) => {
  if (!slides || slides.length === 0) return null; // Safety check

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade, Navigation]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1300}
      pagination={{
        clickable: true,
        el: ".custom-pagination",
        bulletClass: "custom-bullet",
        bulletActiveClass: "custom-bullet-active",
      }}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      grabCursor
      className="h-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <HeroSlide slide={slide} />
        </SwiperSlide>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 custom-pagination flex gap-2"></div>

      <style jsx>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          transform: scale(1.4);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </Swiper>
  );
};

export default HeroSwiper;
