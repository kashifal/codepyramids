import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { HomeMaxRounded } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Favorite } from "@mui/icons-material";
import { HomeRounded } from "@material-ui/icons";
const Header = () => {
  const links: { title: string | any; link: string }[] = [
    { title: "Home", link: "/" },
    { title: "Courses", link: "/courses" },
    { title: "Success Stories", link: "/scholarship" },
    { title: "For School", link: "/projects" },
    // { title: <Favorite />, link: "/projects" },
    // { title: "Report", link: "/" },
  ];
  return (
    <Fragment>
      <div style={{backgroundColor:'rgba(255,255,255,0.4)'}} className="z-50  transition-all shadow-sm w-full backdrop-blur-lg mx-auto px-4 md:px-6 xl:px-4 fixed top-0  h-[64px] flex items-center justify-center">
        <div className=" w-full  flex item-center justify-between ">
          <div className="h-full w-6/12 flex items-center justify-start ">
            <Link to="/">
              <h2 className="font-medium text-xl text-custom-pink t-logo">
                edu<span style={{color:'#2ea2db'}}>q</span><span style={{color:'#e06f2d'}}>o</span><span style={{color:'#b72de0'}}>d</span><span style={{color:'#e0b12d'}}>e</span>
              </h2>
            </Link>

            <div style={{backgroundColor:'rgba(255,255,255,0.7)'}} className="border-2 border-gray-100  lg:ml-3 xl:ml-8 relative hidden lg:w-72   xl:w-96 rounded-full  lg:block">
              <div className="absolute flex items-center justify-between h-full">
                <div className="ml-4 text-slate-500">
                  <SearchIcon />
                </div>
              </div>
              <input
              
                className="bg-transparent rounded-full px-4 py-2 w-60 outline-none xl:w-80 ml-10 "
                type="text"
                placeholder="Search for the best"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="w-6/12  right-0 flex items-center justify-end lg:hidden">
            <span>
              <Sidebar />
            </span>
          </div>
          <div className="w-6/12 items-center justify-end hidden gap-x-2 lg:flex">
            {links.map((link) => (
              <Link key={link.title} to={link.link}>
                <button className="text-custom-dark px-4 xl:px-4 text-sm py-2 leading-5 font-light  mx-0 xl:mx-2 hover:text-custom-primary fav">
                  {link.title}
                </button>
              </Link>
            ))}
            <Link to="/register">
              <button className="normal-case font-light text-sm	bg-custom-primary px-4 py-2 text-white">
                Register
              </button>
            </Link>

            {/* <button
              component={Link}
              to="/register"
              className="normal-case rounded-none font-light text-sm	bg-custom-primary px-4 py-2 text-white"
            >
              Register
            </button> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
