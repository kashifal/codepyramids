import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import Button from "./Button";
import IconButton from "@mui/material/IconButton";
const Header = () => {
  const links: { title: string; link: string }[] = [
    { title: "Home", link: "/" },
    { title: "Courses", link: "/" },
    { title: "Internship", link: "/" },
    { title: "Projects", link: "/" },
    { title: "Report", link: "/" },
  ];
  return (
    <Fragment>
      <div className="w-screen h-20 flex items-center justify-center shadow">
        <div className="xl:container  w-full  flex item-center justify-between px-8 xl:px-6">
          <div className="h-full w-6/12 flex items-center justify-start ">
            <h2 className="font-black text-2xl text-custom-dark t-logo">
              Code<span className="text-custom-primary">Pyramids.</span>
            </h2>

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
              <button
                key={link.title}
                className="text-dark px-3 xl:px-4 text-base py-2 leading-5 font-light  mx-0 xl:mx-2 hover:text-custom-primary"
              >
                {link.title}
              </button>
            ))}
            <Button paddingX="px-4" paddingY="py-2" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
