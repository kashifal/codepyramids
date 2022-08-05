import Typed from "react-typed";
import React, { Fragment } from "react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// const logo = require("../../../assets/hero-image-0.png");

const Landing = () => {
  return (
    <Fragment>
      <div className="relative w-full min-h-[10vh]  flex items-center justify-center ">
        <div className="relative w-[1424px] mx-auto  px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
          <h1 className="text lg:text-[190px] md:text-[70px] text-[40px] font-black">
            Learn From Market Experts
          </h1>
          <div className="absolute w-[35%] right-0 h-full bg-[rgba(214,48,76,0.6764705882352941)]"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
