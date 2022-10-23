import Typed from "react-typed";
import React, { Fragment, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Clear } from "@mui/icons-material";
// import hero from "../../assets/hero-image.png";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const logo = require("../../../assets/hero-image-0.png");

const Landing = () => {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setActive(true), 5000);
  }, []);

  return (
    <Fragment>
      <div className="relative  mt-[64px] overflow-hidden w-full min-h-[70vh] bg-custom-dark flex items-center justify-center ">
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          className={`${
            active === false ? "hidden" : "flex"
          }  overlay transition-all  items-center justify-center fixed w-screen h-screen top-0 left-0  z-50`}
        >
          <div className="w-96 bg-gray-100 min-h-[60px]  rounded transition-all p-4">
            <span
              className="bg-red-100 p-1 cursor-pointer"
              onClick={() => setActive(false)}
            >
              <Clear fontSize="small" color="error" />
            </span>

            <h1 className="text-custom-pink mt-4  text-center text-xl font-bold">
              You are welcome 🚀
            </h1>

            <p className="mt-4">
              "We all make choices, but in the end, our choices make us." — Ken
              Levine
            </p>
            <button
              className="float-right mt-4 bg-custom-pink  text-white px-4 w-full py-2 "
              onClick={() => setActive(!true)}
            >
              Thanks and close
            </button>
          </div>
        </div>
        <div className="w-[1424px] mx-auto px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="w-full  md:w-6/12 h-full flex md:items-start justify-center flex-col">
            <p className="text-white text-left font-light text-sm mt-4 md:mt-0">
              Pakistan's Best School For Best People
            </p>
            <h1 className="text-[24px] md:text-[35px] text-left	md:text-left xl:text-[50px] text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[60px] ">
              Best Online Programming
              <br />
              School For{" "}
              <span className="text-custom-pink">
                <Typed
                  strings={["Kids.", "You.", "Everyone."]}
                  typeSpeed={70}
                  backSpeed={70}
                  loop
                />{" "}
              </span>
            </h1>
            <p className="text-left	md:text-left text-[14px] md:text-[16px] text-white leading-[19px] md:leading-[24px] font-light  md:mt-6 mt-2">
              We mentor the young learners to thrive in this new world- with the
              education that equips them with future skills and raises awareness
              to become the architect of their life. We are the enterpeneurs
              making your kids leaders.
            </p>
            <div className="mt-6 btns">
              <Link to="/courses">
                <button className="px-5 py-2 text-sm  normal-case  rounded-none   bg-custom-pink text-white ">
                  Courses
                </button>
              </Link>
              <Link to="/register">
                <button className="px-5 py-2 text-sm  rounded-none  normal-case  ml-2 bg-white text-custom-dark ">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-6/12 h-full flex items-center justify-center ">
            <div className="absolute hidden lg:block  h-[100px] w-[500px] mt-4 bg-custom-pink right-0 "></div>

            <div className="absolute hidden lg:block h-[400px] right-0  w-[100px] -top-64 bg-custom-pink"></div>

            <img
              className="max-w-[250px] z-40 md:max-w-[320px] lg:max-w-[430px]"
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
