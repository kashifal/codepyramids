import Typed from "react-typed";
import React, { Fragment } from "react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import { ArrowDownward } from "@mui/icons-material";
import SouthIcon from "@mui/icons-material/South";
import MySlider from "../../components/MySlider";
import Text from "../../components/Text";
import Footer from "../../components/Footer";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const logo = require("../../assets/hero-image.png");

const AllCourses = () => {
  return (
    <Fragment>
      <div className="relative  mt-[64px] overflow-hidden w-full min-h-[60vh] bg-custom-dark flex items-center justify-center ">
        {/* <div className="absolute hidden lg:block  h-[200px] w-[900px] mt-4 bg-custom-dark top-[79%]"></div> */}

        <div className="w-[1424px]  mx-auto px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="relative w-full items-start md:w-6/12 h-full flex md:items-start justify-center flex-col">
            {/* <p className="text-white font-light text-sm mt-4 md:mt-0">
              All Courses are well designed
            </p> */}

            <h1 className="text-[28px] text-left md:text-[35px] 	md:text-left xl:text-[70px] text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[75px] ">
              Take Your Favourite 
              Course for Free <br />
              <span className="font-light text-left text-custom-primary">
                Learn{" "}
                <span className="text-custom-pink">
                  <Typed
                    strings={[
                      `Php`,
                      "NodeJS",
                      "HTML CSS",
                      "Typescript",
                      "Javascript",
                      "Free !!!",
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                  />{" "}
                </span>
              </span>
            </h1>
          </div>
          <div className="relative w-6/12 h-full flex items-center justify-center ">
            <div className="absolute hidden lg:block  h-[100px] w-[500px] mt-4 bg-custom-pink right-0 "></div>

            <div className="absolute hidden lg:block h-[400px] right-0  w-[100px] -top-48 bg-custom-pink"></div>

            <img
              className="w-[300px] md:w-[200px] z-40 lg:w-[350px]"
              src={logo}
              alt=""
            />
          </div>
        </div>
      </div>
      <MySlider age="Featured Programming courses" />
      <Text text="On Demand, one-o-one classes" />
      <MySlider age="Featured Frontend Web Development courses" />
      <MySlider age="Featured Backend Web Development courses" />
      <Footer />
    </Fragment>
  );
};

export default AllCourses;
