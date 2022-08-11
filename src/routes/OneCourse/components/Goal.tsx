import { Chip, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import React from "react";

const Goal = () => {
  return (
    <div className="relative mt-8 mb-8 overflow-hidden w-full min-h-[20vh]  flex items-center justify-center ">
      <div className="relative w-[1424px] mx-auto px-4  h-full  flex items-start flex-col">
        <h1 className=" text-[30px] md:text-[32px] font-bold text-custom-dark text-left">
          {/* <span className="text-custom-primary text-[30px] font-bold">.</span> */}
          <span className="font-black text-custom-primary">
            Goal of this course
          </span>{" "}
          <br />
        </h1>
        <div className="mt-2">
          <h3 className="mt-2 text-xl ">
            <span>👨‍🎤</span> Become front end engineer
          </h3>
          <h3 className="mt-2 text-xl ">
            <span>⚛️</span> Learn how react works
          </h3>
          <h3 className="mt-2 text-xl ">
            <span>🦾</span> Projects
          </h3>
          <h3 className="mt-2 text-xl ">
            <span>💞</span> Designing
          </h3>
          <h3 className="mt-2 text-xl ">
            <span>🚀</span> Use Figma, Photoshop
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Goal;
