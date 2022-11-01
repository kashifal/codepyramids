import React, { Fragment } from "react";
import Typed from "react-typed";
import Footer from "../../components/Footer";

const logo = require("../../assets/hero-image.png");

export default function Scholarship() {
  return (
    <Fragment>
      <div className="relative  mt-[64px] overflow-hidden w-full min-h-[60vh] bg-custom-dark flex items-center justify-center ">
        {/* <div className="absolute hidden lg:block  h-[200px] w-[900px] mt-4 bg-custom-dark top-[79%]"></div> */}

        <div className="w-[1424px]  mx-auto px-4   h-full  flex items-center ">
          <div className="relative w-full items-center  h-full flex  justify-center flex-col">
            {/* <p className="text-white font-light text-sm mt-4 md:mt-0">
                  All Courses are well designed
                </p> */}

            <h1 className="text-[28px] md:text-[35px] text-center	  xl:text-[60px]  text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[75px] ">
              90% Ours students are now employed, Just because they gave us
              chance <br />
              <span className="font-light text-center text-custom-primary">
                Get{" "}
                <span className="text-custom-primary">
                  <Typed
                    strings={[`25%`, "50%", "75%", "100%"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                  />{" "}
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="h-[400px] flex items-center justify-center ">
        middle section
      </div>

      <Footer />
    </Fragment>
  );
}
