import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
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
        <div className="container w-full  flex item-center justify-between ">
          <div className="h-full w-6/12 flex items-center justify-start ">
            <h2 className="font-black text-2xl text-dark t-logo">
              Code<span className="text-primary">Pyramids.</span>
            </h2>

            <div className="border-2 ml-10 relative w-96 rounded-full ">
              <div className="absolute flex items-center justify-between h-full">
                <FontAwesomeIcon
                  className="ml-4 text-slate-500"
                  icon={faSearch}
                />
              </div>
              <input
                className=" rounded-full px-4 py-2 outline-none w-80 ml-10"
                type="text"
                placeholder="Search for the best"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="w-6/12  right-0 flex item-center justify-end">
            {links.map((link) => (
              <button
                key={link.title}
                className="text-dark px-5 text-base leading-5 font-light mx-2 "
              >
                {link.title}
              </button>
            ))}
            <Button paddingX="px-5" paddingY="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
