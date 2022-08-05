import Typed from "react-typed";
import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const logo = require("../../../assets/benefits.png");

const reviews = [
  {
    pic: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    name: "kashif",
    course: "Web Development",
  },
  {
    pic: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    name: "Shaheer",
    course: "ReactJS",
  },
  {
    pic: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    name: "Hamza",
    course: "NodeJS",
  },
  {
    pic: "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    name: "Ann",
    course: "Web Development",
  },
];

const Landing = () => {
  return (
    <Fragment>
      <div className="relative w-full min-h-[70vh] bg-[#f4f7fc] px-4 md:px-6 xl:px-4  flex items-center justify-center ">
        <div className="w-[1424px] mx-auto py-6 h-full ">
          <h1 className="text-[28px] text-center -mt-2 md:text-[35px]  xl:text-[30px] text-black  font-bold leading-[32px] md:leading-[40px] xl:leading-[60px] ">
            Students Reviews About
            <span className="text-custom-primary"> CodePyramids</span>
          </h1>
          <div className="flex items-center justify-around gap-y-8 flex-wrap  mt-8 comments">
            {reviews.map((item, index) => (
              <div
                key={index}
                className=" min-h-32 lg:max-w-[350px] xl:max-w-[600px] rounded-xl p-4 border-2"
              >
                <div className="flex items-center">
                  <div className="w-full flex">
                    <img
                      className="w-8  h-8 rounded-full border-2  border-custom-primary"
                      src={item.pic}
                      alt=""
                    />{" "}
                    {"  "}
                    <div className="ml-2 -mt-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="font-light text-sm">
                        Course:{" "}
                        <span className="p-1 rounded-sm bg-custom-primary text-white">
                          {item.course}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-light text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore animi iusto eum, minus ducimus temporibus odio nam
                  tempore suscipit totam. Lorem ipsum dolor.
                </p>
                <div className="flex items-center">
                  <p className="text-custom-primary font-medium text-sm">
                    August, 2022
                  </p>
                  <div className="flex ml-2 ">
                    <Icon
                      className="text-custom-primary"
                      icon="ant-design:star-filled"
                    />
                    <Icon
                      className="text-custom-primary"
                      icon="ant-design:star-filled"
                    />
                    <Icon
                      className="text-custom-primary"
                      icon="ant-design:star-filled"
                    />
                    <Icon
                      className="text-custom-primary"
                      icon="ant-design:star-filled"
                    />
                    <Icon
                      className="text-custom-primary"
                      icon="bxs:star-half"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
