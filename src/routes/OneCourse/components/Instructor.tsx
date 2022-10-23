import { Chip, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import React from "react";

const Instructor = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-[20vh]  flex items-center justify-center ">
      <div className="relative max-w-[1424px] w-full mx-auto px-4 shadow border-2 border-gray-50   h-full  flex items-center ">
        <div className="absolute w-full h-full bg-white  text-custom-primary  left-0 "></div>

        <div className="w-full h-full p-4 z-40">
          <div className="w-full ">
            <h1 className="text-[24px] font-black text-custom-primary">
              Course Instructor
            </h1>
            <div className="flex mt-4">
              <div className="flex  items-center justify-center">
                <div className="w-24 h-24 rounded-full object-contain overflow-hidden border-2  ">
                  <img
                    className="object-contain"
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>

              <div className="ml-4">
                <h3 className="text-xl font-bold mt-2 text-custom-primary">
                   Kashif Sulehria <span className="text-xs font-thin text-amber-500">(Full stack developer)</span>
                </h3>

                <Stack direction="row"  className="mt-2 flex flex-wrap gap-2 items-start justify-start" >
                  <Chip className="text-custom-primary" label="React" />
                  <Chip className="text-custom-primary" label="HTML5" />
                  <Chip className="text-custom-primary" label="CSS3" />
                  <Chip className="text-custom-primary" label="Javascript" /> 
                  <Chip className="text-custom-primary" label="Laravel" />
                </Stack>

                <Rating
                  size="small"
                  name="read-only"
                  className="mt-2"
                  value={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
