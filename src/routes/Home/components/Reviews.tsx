import React from "react";
import Typed from "react-typed";
import MySlider from "../../../components/MySlider";

const logo = require("../../../assets/hero-image-1.png");

const Students = () => {
  return (
    <div className=" w-full min-h-[20vh]  flex items-center justify-center mt-12">
      <div className="w-[1424px] mx-auto px-4  h-full ">
        <MySlider />
      </div>
    </div>
  );
};

export default Students;
