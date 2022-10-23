import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const logo = require("../../../assets/hero-image-1.png");

const Students = () => {
  return (
    <div className=" w-full min-h-[60vh] px-4 md:px-6 xl:px-4 flex items-center justify-center mt-12">
      <div className="w-[1424px] mx-auto   h-full  flex items-center justify-between md:flex-row flex-col-reverse">
        <div className="relative w-6/12 h-full flex items-center justify-center mt-8 md:mt-0">
          <img
            className="z-40 max-w-[200px] md:max-w-[250px] lg:max-w-[350px]"
            src={logo}
            alt=""
          />
          <div className="absolute hidden lg:block sudo h-[100px] w-[500px] bg-custom-pink left-0 "></div>
          <div className="absolute hidden lg:block  h-[400px] left-0 top-52 w-[100px] bg-custom-pink"></div>
        </div>
        <div className="w-full  md:w-6/12 h-full flex items-start justify-center flex-col">
          <p className="text-black font-light text-left text-sm mt-2 ">
            Students Love our services....
          </p>
          <h1 className="text-[28px] md:text-[35px]  	text-left xl:text-[40px] text-black  font-black leading-[32px] md:leading-[40px] xl:leading-[60px] ">
            We Teach From Heart,
            <br />
            From deep heart.
          </h1>
          <p className="text-left	md:text-left text-[14px] md:text-[16px] text-gray-700 leading-[19px] md:leading-[24px] font-light mt-2  md:mt-6">
            We mentor the young learners to thrive in this new world- with the
            education that equips them with future skills and raises awareness
            to become the architect of their life.
          </p>
          <div className="mt-6 btns">
            <Link to="/internship">
              <button className="px-5  text-sm  py-2 normal-case rounded-none  border-custom-pink bg-custom-pink text-white ">
                Our Teachers
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
