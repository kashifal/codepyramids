import Typed from "react-typed";
import React, { Fragment } from "react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const logo = require("../../../assets/benefits.png");

const Landing = () => {
  return (
    <Fragment>
      <div className="relative overflow-hidden px-4 md:px-6 xl:px-4 w-full min-h-[60vh] bg-custom-dark mt-16 flex items-center justify-center ">
        <div className="relative w-[1424px] mx-auto   h-full   flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="absolute hidden lg:block  h-[100px] w-[500px] mt-4 bg-custom-primary right-0 "></div>

          <div className="absolute hidden lg:block h-[400px] right-0  w-[100px] -top-64 bg-custom-primary"></div>

          <div className="w-full  md:w-6/12 h-full flex  items-start justify-center flex-col">
            <p className="text-white  text-left font-light text-sm mt-4 md:mt-0">
              Benefits of learning code
            </p>
            <h1 className="text-[24px] md:text-[35px] text-left	md:text-left xl:text-[40px] text-white  font-black  ">
              Coding is perfect
              <span className="bg-custom-primary px-2 py-4 ">
                Job in the world.
              </span>{" "}
            </h1>
            <p className="text-left	md:text-left text-[14px] md:text-[16px] text-white leading-[19px] md:leading-[24px] font-light  mt-2 md:mt-6">
              We mentor the young learners to thrive in this new world- with the
              education that equips them with future skills and raises awareness
              to become the architect of their life. We are the enterpeneurs
              making your kids leaders.
            </p>
          </div>
          <div className="relative w-6/12 h-full flex items-center justify-center ">
            <img
              className="max-w-[250px] md:max-w-[320px] lg:max-w-[430px]"
              src={logo}
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
