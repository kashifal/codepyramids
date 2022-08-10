import Typed from "react-typed";
import React, { Fragment } from "react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import { ArrowDownward } from "@mui/icons-material";
import SouthIcon from "@mui/icons-material/South";
import MySlider from "../../components/MySlider";
import Text from "../../components/Text";
import Footer from "../../components/Footer";
const logo = require("../../assets/hero-image.png");

const AllCourses = () => {
  return (
    <Fragment>
      <div className="relative overflow-hidden w-full min-h-[70vh] bg-custom-dark flex items-center justify-center ">
        {/* <div className="absolute hidden lg:block  h-[200px] w-[900px] mt-4 bg-custom-dark top-[79%]"></div> */}

        <div className="w-[1424px]  mx-auto px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="relative w-full items-center md:w-6/12 h-full flex md:items-start justify-center flex-col">
            {/* <p className="text-white font-light text-sm mt-4 md:mt-0">
              All Courses are well designed
            </p> */}

            <h1 className="text-[28px] md:text-[35px] text-center	md:text-left xl:text-[74px] text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[70px] ">
              Take Your Favourite
              <br />
              Course for Free <br />
              <span className="font-light text-custom-primary">
                Explore Courses <SouthIcon />
              </span>
            </h1>
          </div>
          <div className="relative w-6/12 h-full flex items-center justify-center ">
            <div className="absolute hidden lg:block  h-[100px] w-[500px] mt-4 bg-custom-pink right-0 "></div>

            <div className="absolute hidden lg:block h-[400px] right-0  w-[100px] -top-48 bg-custom-pink"></div>

            <img
              className="w-[250px] md:w-[200px] z-40 lg:w-[350px]"
              src={logo}
              alt=""
            />
          </div>
        </div>
      </div>
      <MySlider age="6" />
      <Text text="Learn Anywhere, Learn Anytime" />
      <MySlider age="10" />
      <MySlider age="17" />
      <Footer />
    </Fragment>
  );
};

export default AllCourses;
