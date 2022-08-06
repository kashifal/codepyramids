import Typed from "react-typed";
import React, { Fragment } from "react";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// const logo = require("../../../assets/hero-image-0.png");

const Landing = ({ text }: any) => {
  return (
    <Fragment>
      <div className="relative w-full min-h-[10vh]  flex items-center justify-center ">
        <div className="relative w-[1424px] mx-auto  px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
          <h1 className="text lg:text-[80px] md:text-[70px] text-[40px] font-black">
            {text} <br />
            <span className="">Start your journey with us!</span>
          </h1>
          <div className="absolute w-[50%] right-0 h-[50%] top-0 bg-[rgba(222,0,165,0.3764705882352941)]"></div>
          <div className="absolute w-[50%] left-0 h-[50%] bottom-0 bg-[rgba(222,0,165,0.3764705882352941)]"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
