import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <div className="relative px-4 md:px-6 xl:px-4 w-full min-h-[60vh] bg-custom-dark flex items-center justify-center flex-wrap">
      <div className="h-full  py-8 w-[1424px] mx-auto flex items-start justify-evenly lg:justify-between  flex-wrap gap-8">
        <div className="w-[270px] h-full text-white  1st">
        <Link to="/">
              <h2 className="font-normal text-2xl text-white t-logo items-baseline flex">
                edu<span style={{color:'#2ea2db'}}><img className="w-4" src={logo} alt="eduqode" /></span><span style={{color:'#e06f2d'}}>o</span><span style={{color:'#b72de0'}}>d</span><span style={{color:'#e0b12d'}}>e</span>
              </h2>
            </Link>

          <div className="mt-8">
            <h1 className="font-black text-custom-primary">Phones:</h1>
            <div className="">
              <p className="mt-1">
                Pakistan :{" "}
                <span className="font-light text-[14px]">(+92) 3246897397</span>
              </p>
              <p className="mt-1">
                KSA :{" "}
                <span className="font-light text-[14px]">(+92) 3246897397</span>
              </p>
              <p className="mt-1">
                US : <span className="font-light">(+92) 3246897397</span>
              </p>
              <p className="mt-1">
                GB :{" "}
                <span className="font-light text-[14px]">(+92) 3246897397</span>
              </p>
            </div>
          </div>
        </div>
        {/* hi here  */}
        <div className="w-[270px] h-full text-white   1st">
          <div className="">
            <h1 className="font-black text-custom-primary">Popular Courses:</h1>
            <div className="">
              <p className="mt-1">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  Web Development
                </span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  Frontend Development
                </span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  Backend Development
                </span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  React JS Development
                </span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  NodeJS Development
                </span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  React Native Development
                </span>
              </p>{" "}
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  HTML && CSS Course
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* hi here  */}
        <div className="w-[270px] h-full text-white   1st">
          <div className="">
            <h1 className="font-black text-custom-primary">Company:</h1>
            <div className="">
              <p className="mt-1">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">Contact us</span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">About us</span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">Careers</span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">Blogs</span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">Ceo message</span>
              </p>
            </div>
          </div>
        </div>
        {/* hi here  */}
        <div className="w-[270px] h-full text-white   1st">
          <div className="">
            <h1 className="font-black text-custom-primary">Policies:</h1>
            <div className="">
              <p className="mt-1">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  Privacy Policy
                </span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  Refund and Cancellation
                </span>
              </p>
              <p className="">
                <span className="text-custom-primary font-black text-2xl">
                  .
                </span>{" "}
                <span className="font-light text-[14px] ml-1">
                  Terms of Use
                </span>
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
