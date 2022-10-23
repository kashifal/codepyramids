import Typed from "react-typed";
import React, { Fragment } from "react";
import {
  Google,
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const Companies = () => {
  return (
    <Fragment>
      <div className="relative overflow-hidden px-4 md:px-6 xl:px-4 w-full min-h-[20vh]   mt-8 flex items-center justify-center ">
        <div className="relative w-[1424px] mx-auto   h-full   flex items-center justify-between md:flex-row ">
          <Google className="text-[30px] md:text-[70px] text-custom-primary" />
          <Facebook className="text-[30px] md:text-[70px] text-custom-primary" />
          <Twitter className="text-[30px] md:text-[70px] text-custom-primary" />
          <LinkedIn className="text-[30px] md:text-[70px] text-custom-primary" />
          <YouTube className="text-[30px] md:text-[70px] text-custom-primary" />
        </div>
      </div>
    </Fragment>
  );
};

export default Companies;
