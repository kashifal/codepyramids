import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
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
    { title: "Scholarship", link: "/scholarship" },
    { title: "Projects", link: "/projects" },
    // { title: <Favorite />, link: "/projects" },
    // { title: "Report", link: "/" },
  ];
  return (
    <Fragment>
      <div className="z-50 max-w-[1624px] mx-auto px-4 md:px-6 xl:px-4  h-[64px] flex items-center justify-center">
        <div className=" w-full  flex item-center justify-between ">
          <div className="h-full w-6/12 flex items-center justify-start ">
            <Link to="/">
              <h2 className="font-black text-xl text-custom-dark t-logo">
                edu<span className="text-custom-primary">qode.</span>
              </h2>
            </Link>

            <div className="border-2  lg:ml-3 xl:ml-8 relative hidden lg:w-72   xl:w-96 rounded-full  lg:block">
              <div className="absolute flex items-center justify-between h-full">
                <FontAwesomeIcon
                  className="ml-4 text-slate-500"
                  icon={faSearch}
                />
              </div>
              <input
                className=" rounded-full px-4 py-2 w-60 outline-none xl:w-80 ml-10 "
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
          <div className="w-6/12 items-center justify-end hidden lg:flex">
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

            {/* <Button
              component={Link}
              to="/register"
              className="normal-case font-light	bg-custom-primary px-4 py-2 text-white"
            >
              Register
            </Button> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
