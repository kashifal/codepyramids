import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./index.scss";

const image = "https://source.unsplash.com/featured/300x201";

const coursesData = [
  {
    img: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Web Development Course",
    logo: "https://img.icons8.com/color/344/google-logo.png",
    age: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Frontend Course",
    logo: "https://img.icons8.com/fluency/2x/logo.png",
    age: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Computer Basics Course",
    logo: "https://img.icons8.com/color/2x/google-forms-new-logo-1.png",
    age: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Backend  Course",
    logo: "https://img.icons8.com/fluency/2x/old-vmware-logo.png",
    age: 15,
  },
  {
    img: "https://images.unsplash.com/photo-1611623516688-c47bb8d43311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Introduction to Programming",
    logo: "https://img.icons8.com/color/2x/canvas-student.png",
    age: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2lkcyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "HTML CSS JS Course",
    logo: "https://img.icons8.com/color/2x/yolo.png",
    age: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1565598621680-94ac0c22b148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGtpZHMlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "ReactJS Course",
    logo: "https://img.icons8.com/color/2x/fusionbd.png",
    age: 12,
  },
];

export default function App() {
  const images = new Array(6).fill({ url: image });
  return (
    <div className="relative max-w-[1424px] mx-auto min-h-[40vh] overflow-hidden flex items-center justify-center mt-32 ">
      <div className="w-full  h-full ">
        <Swiper
          modules={[Navigation, Pagination]}
          // className="external-buttons"
          spaceBetween={20}
          slidesPerView={1}
          navigation
          updateOnWindowResize
          observer
          //   observerParents
          initialSlide={1}
          loop
          breakpoints={{
            // when window width is >= 640px
            600: {
              width: 600,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            900: {
              width: 900,
              slidesPerView: 3,
            },
            1250: {
              width: 1250,
              slidesPerView: 4,
            },
            1500: {
              width: 1500,
              slidesPerView: 5,
            },
          }}
        >
          {coursesData.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="absolute z-40 text-sm font-light text-white w-16 h-6 top-2 left-2 rounded-sm flex items-center justify-center bg-[rgba(214,48,76,.8)]">
                age {item.age}
              </div>
              <div className="relative h-full w-full flex justify-between flex-col card-data">
                <div className=" relative w-full h-[40%] object-cover  img">
                  <img className=" w-full h-full" src={item.img} alt="" />

                  <div className="h-16 w-16 bg-white top-28 left-4 border-2 absolute institute">
                    <img src={item.logo} alt="" />
                  </div>
                </div>
                <div className="w-full h-[60%] bg-custom-dark px-4 text-left text-white py-14 info">
                  <h1 className="font-bold text-[16px] text-left">
                    {item.title}
                  </h1>
                  <p className="text-sm font-light text-left mt-2">
                    Lorem ipsum dolor sit amet adipisicing elit. Autem facilis
                    nemo commodi molestiae.
                  </p>
                  <button className="px-2 py-[4px] text-sm font-light mt-2   text-custom-primary rounded  ml-0">
                    Register Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
