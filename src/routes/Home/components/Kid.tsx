import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const logo = require("../../../assets/kid-1.png");

const Students = () => {
  return (
    <div className="relative bg-custom-dark w-full min-h-[60vh] px-4 md:px-6 xl:px-4 flex items-center mt-16 justify-center ">
      <div className="w-[1424px] mx-auto   h-full  flex items-center justify-between md:flex-row flex-col-reverse">
        <div className="relative w-6/12 h-full flex items-center justify-center mt-8 md:mt-0">
          <img
            className="max-w-[160px] z-20 md:max-w-[190px] lg:max-w-[240px]"
            src={logo}
            alt=""
          />
          <div className="absolute hidden lg:block sudo h-[100px] w-[500px] bg-custom-primary left-0 "></div>
          <div className="absolute hidden lg:block  h-[400px] left-0 top-52 w-[100px] bg-custom-primary"></div>
        </div>
        <div className="w-full   md:w-6/12 h-full flex  items-start justify-center flex-col">
          <p className="text-white font-light text-left text-sm mt-2 ">
            For You and Your Kid....
          </p>
          <h1 className="text-[24px] md:text-[35px] 	 text-left	md:text-left xl:text-[40px] text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[60px] ">
            Take the next step with{" "}
            <span className="bg-custom-primary px-2 py-4">precode.</span>
          </h1>
          <p className="text-left	md:text-left text-[14px] md:text-[16px] text-[#d0d0d0] leading-[19px] md:leading-[24px] font-light mt-2 md:mt-6">
            We mentor the young learners to thrive in this new world- with the
            education that equips them with future skills and raises awareness
            to{" "}
            <span className="px-2 bg-cus-yellow text-black">
              become the architect of their life.
            </span>
          </p>
          <div className="mt-6 btns">
            <Link to="/register">
              <button className="px-5 py-2  text-sm  normal-case rounded-none border-2 text-custom-primary border-custom-primary bg-transparent hover:bg-custom-primary hover:text-white ">
                Join now
              </button>
            </Link>
            {/* <button className="px-5 py-2   ml-2 bg-white text-custom-dark rounded">
              Projects
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
