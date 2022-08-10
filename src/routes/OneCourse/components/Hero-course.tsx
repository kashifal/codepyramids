import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
const OneCourse = () => {
  const id = useParams();

  return (
    <Fragment>
      <div className="relative overflow-hidden  min-h-[70vh] bg-custom-dark flex items-center justify-center ">
        <div className="w-[1424px] mx-auto px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="w-full items-center md:w-6/12 h-full flex md:items-start justify-center flex-col">
            <p className="text-white font-light text-sm mt-4 md:mt-0">
              on demand one-o-one classes
            </p>
            <h1 className="text-[28px] md:text-[35px] text-center	md:text-left xl:text-[50px] text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[60px] ">
              Become Frontend Engineer
              <br />
              in 3 months
            </h1>
            <p className="text-center	md:text-left text-[14px] md:text-[16px] text-white leading-[19px] md:leading-[24px] font-normal  mt-6">
              We mentor the young learners to thrive in this new world- with the
              education that equips them with future skills and raises awareness
              to become the architect of their life. We are the enterpeneurs
              making your kids leaders.
            </p>
            <div className="mt-6 btns">
              <Link to="/courses">
                <button className="px-5 py-2    bg-custom-pink text-white ">
                  <RocketLaunchIcon /> Take this course
                </button>
              </Link>
              <Link to="/register">
                <button className="px-5 py-2   ml-2 bg-white text-custom-dark ">
                  <FavoriteBorderIcon /> Add to favourite
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-6/12 h-full flex items-center justify-center ">
            <div className="absolute hidden lg:block  h-[100px] w-[500px] mt-4 bg-custom-pink right-0 "></div>

            <div className="absolute hidden lg:block h-[400px] right-0  w-[100px] -top-64 bg-custom-pink"></div>

            <img
              className="max-w-[350px] z-40 md:max-w-[320px] lg:max-w-[430px] border-4 border-custom-primary"
              src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OneCourse;
