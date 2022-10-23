import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clear } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const coursesData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Web Development Course",
    logo: "https://img.icons8.com/color/344/google-logo.png",
    age: 7,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Frontend Course",
    logo: "https://img.icons8.com/fluency/2x/logo.png",
    age: 7,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Computer Basics Course",
    logo: "https://img.icons8.com/color/2x/google-forms-new-logo-1.png",
    age: 7,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Backend  Course",
    logo: "https://img.icons8.com/fluency/2x/old-vmware-logo.png",
    age: 15,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1611623516688-c47bb8d43311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Introduction to Programming",
    logo: "https://img.icons8.com/color/2x/canvas-student.png",
    age: 7,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2lkcyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "HTML CSS JS Course",
    logo: "https://img.icons8.com/color/2x/yolo.png",
    age: 7,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1565598621680-94ac0c22b148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGtpZHMlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "ReactJS Course",
    logo: "https://img.icons8.com/color/2x/fusionbd.png",
    age: 12,
  },
];
const OneCourse = () => {
  const [active, setActive] = React.useState(false);

  const day = new Date();

  const [value, setValue] = React.useState<Dayjs | null>(dayjs(day));

  return (
    <Fragment>
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        className={`${
          active === false ? "hidden" : "flex"
        }  overlay transition-all  items-center justify-center fixed w-screen h-screen top-0 left-0  z-50`}
      >
        <div className="min-w-[200px] bg-gray-100 min-h-[60px]  rounded transition-all p-4">
          <span
            className="bg-red-100 p-1 cursor-pointer"
            onClick={() => setActive(false)}
          >
            <Clear fontSize="small" color="error" />
          </span>
          <h1 className="text-custom-pink mt-4 pb-8 text-center text-xl font-bold">
            Select Class Time 🚀
          </h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticTimePicker
              ampm
              className="normal-case"
              orientation="portrait"
              toolbarTitle="Click on Hours and Mins"
              openTo="hours"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <p></p>
          <button
            className="float-right bg-custom-pink  text-white px-4 w-full py-2 "
            onClick={() => setActive(!true)}
          >
            I am done let's go
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden mt-[64px] md:py-0 py-4 min-h-[70vh] bg-custom-dark flex items-center justify-center ">
        <div className="w-[1424px] mx-auto px-4  h-full  flex items-center justify-between md:flex-row flex-col-reverse">
          <div className="w-full   md:w-6/12 h-full flex  items-start justify-center flex-col">
            <p className="text-white font-light text-left text-sm mt-4 md:mt-0">
              on demand one-o-one classes
            </p>
            <h1 className="text-[24px] md:text-[35px] text-left	md:text-left xl:text-[50px] text-white  font-black leading-[32px] md:leading-[40px] xl:leading-[60px] ">
              Become Frontend Engineer {/* <br /> */}
              in 3 months
            </h1>
            <p className="text-left	md:text-left text-[14px] md:text-[16px] text-white leading-[19px] md:leading-[24px] font-light mt-6">
              We mentor the young learners to thrive in this new world- with the
              education that equips them with future skills and raises awareness
              to become the architect of their life. We are the enterpeneurs
              making your kids leaders.
            </p>
            <h1 className="mt-4 text-2xl text-white font-black  p-1">
              PKR 12000
            </h1>
            <div className="mt-4 btns">
              <button
                onClick={() => setActive(true)}
                className="px-2 md:px-5 py-2 text-sm   bg-custom-pink text-white "
              >
                <RocketLaunchIcon /> Buy this course
              </button>

              <Link to="/register">
                <button className="px-2 md:px-5 py-2 text-sm  ml-2 bg-white text-custom-dark ">
                  <FavoriteBorderIcon /> Add to favourite
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-6/12 h-full flex items-center justify-center ">
            <div className="absolute hidden lg:block  h-[100px] w-[500px] mt-4 bg-custom-pink right-0 "></div>

            <div className="absolute hidden lg:block h-[400px] right-0  w-[100px] -top-64 bg-custom-pink"></div>
            <iframe
              className="max-w-[350px] z-40 md:max-w-[320px] lg:max-w-[430px] border-4 border-custom-primary"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8UVNT4wvIGY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OneCourse;
