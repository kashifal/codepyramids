import { Chip, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import React from "react";

const Instructor = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-[20vh]  flex items-center justify-center ">
      <div className="relative w-[1424px] mx-auto px-4  h-full  flex items-center ">
        <div className="absolute w-full h-full bg-custom-dark text-custom-primary  left-0 "></div>

        <div className="w-6/12 h-full p-4 z-40">
          <div>
            <h1 className=" text-[28px] font-black text-custom-primary">
              Course Instructor
            </h1>
            <div className="flex mt-4">
              <div className="flex">
                <div className="w-24 h-24 rounded-full object-contain overflow-hidden border-2 border-custom-primary bg-red-700">
                  <img
                    className="object-contain"
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>

              <div className="ml-4">
                <h3 className="text-xl font-bold mt-2 text-custom-primary">
                  M. Kashif Sulehria
                </h3>

                <Stack direction="row" className="mt-2" spacing={1}>
                  <Chip className="text-custom-primary" label="React" />
                  <Chip className="text-custom-primary" label="HTML5" />
                  <Chip className="text-custom-primary" label="CSS3" />
                  <Chip className="text-custom-primary" label="Javascript" />
                  <Chip className="text-custom-primary" label="Mern" />
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
