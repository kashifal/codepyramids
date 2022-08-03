import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./index.scss";

const image = "https://source.unsplash.com/featured/300x201";

export default function App() {
  const images = new Array(6).fill({ url: image });
  return (
    <>
      <h1 className="text-[28px] -mt-2 md:text-[35px] text-center	md:text-left xl:text-[30px] text-black  font-bold leading-[32px] md:leading-[40px] xl:leading-[60px] ">
        Age 6+{" "}
        <span className="text-custom-primary"> web development courses</span>
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        // className="external-buttons"
        spaceBetween={30}
        slidesPerView={5}
        navigation
        updateOnWindowResize
        observer
        //   observerParents
        initialSlide={1}
        loop
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
