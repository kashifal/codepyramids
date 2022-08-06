import Typed from "react-typed";
import React, { Fragment } from "react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const logo = require("../../../assets/benefits.png");

const Landing = () => {
  return (
    <Fragment>
      <div className="relative overflow-hidden px-4 md:px-6 xl:px-4 w-full min-h-[70vh] bg-custom-dark mt-8 flex items-center justify-center ">
        <div className="relative w-[1424px] mx-auto   h-full   flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="absolute hidden lg:block  h-[100px] w-[500px] mt-4 bg-custom-pink right-0 "></div>

          <div className="absolute hidden lg:block h-[400px] right-0  w-[100px] -top-48 bg-custom-pink"></div>

          <div className="w-full items-center md:w-6/12 h-full flex md:items-start justify-center flex-col">
            <p className="text-white font-light text-sm mt-4 md:mt-0">
              Benefits of learning code
            </p>
            <h1 className="text-[28px] md:text-[35px] text-center	md:text-left xl:text-[50px] text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[60px] ">
              Programming is most paying
              <br />
              Job in the world.{" "}
            </h1>
            <p className="text-center	md:text-left text-[14px] md:text-[16px] text-white leading-[19px] md:leading-[24px] font-normal  mt-6">
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
