import React from "react";
import Typed from "react-typed";

const logo = require("../../../assets/hero-image-1.png");

const Students = () => {
  return (
    <div className=" w-full min-h-[50vh] bg-[#2a3749] flex items-center justify-center mt-12">
      <div className="w-[1424px] mx-auto px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
        <div className=" w-6/12 h-full flex items-center justify-center mt-8 md:mt-0">
          <img
            className="max-w-[200px] md:max-w-[250px] lg:max-w-[350px]"
            src={logo}
            alt=""
          />
        </div>
        <div className="w-full items-center md:w-6/12 h-full flex md:items-start justify-center flex-col">
          <p className="text-black font-light text-sm mt-2 ">
            Students Love our services....
          </p>
          <h1 className="text-[28px] md:text-[35px] 	 text-center	md:text-left xl:text-[50px] text-black  font-black leading-[32px] md:leading-[40px] xl:leading-[60px] ">
            We Teach From Heart,
            <br />
            From deep heart.
          </h1>
          <p className="text-center	md:text-left text-[14px] md:text-[16px] text-black leading-[19px] md:leading-[24px] font-normal  mt-6">
            We mentor the young learners to thrive in this new world- with the
            education that equips them with future skills and raises awareness
            to become the architect of their life.
          </p>
          <div className="mt-6 btns">
            <button className="px-5 py-2   border-custom-dark bg-custom-dark text-white rounded">
              Reviews
            </button>
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
