// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../assets/carousel1.jpg";
import bgimg2 from "../assets/carousel2.jpg";
import bgimg3 from "../assets/carousel3.jpg";

export default function Banner() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Get Your Software service Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Get Your Graphics Design Projects Done in minutes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg3} text="Start Your device service in minutes" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
