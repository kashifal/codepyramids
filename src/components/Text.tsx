import Typed from "react-typed";
import React, { Fragment } from "react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// const logo = require("../../../assets/hero-image-0.png");

const Landing = ({ text }: any) => {
  return (
    <Fragment>
      <div className="relative bg-custom-dark w-full min-h-[10vh] mt-16  flex items-center justify-center ">
        <div className="relative w-[1424px] mx-auto  px-4  h-full  flex items-center justify-center md:flex-row flex-col-reverse">
          <h1 className="text text px-2 py-4 text-white tracking-widest lg:text-[60px] md:text-[40px] sm:text-[40px] text-[28px] text-center font-black">
            {text}
          </h1>
          <div className="absolute w-[50%] right-0 h-[50%] top-0 "></div>
          <div className="absolute w-[50%] left-0 h-[50%] bottom-0 "></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
