import React, { Fragment } from "react";
import Button from "./Button";

const Header = () => {
  const links: { title: string; link: string }[] = [
    { title: "Home", link: "/" },
    { title: "Courses", link: "/" },
    { title: "Internship", link: "/" },
    { title: "Projects", link: "/" },
    { title: "Find the best", link: "/" },
  ];
  return (
    <Fragment>
      <div className="w-screen h-20 flex items-center justify-center shadow-sm">
        <div className="container h-full flex item-center justify-between ">
          <div className="h-full w-auto flex items-center justify-start ">
            <h2 className="font-bold text-2xl text-dark t-logo">
              Code<span className="text-primary">Pyramids.</span>
            </h2>
          </div>
          <div className="w-auto h-full flex item-center justify-center">
            {links.map((link) => (
              <button
                key={link.title}
                className="text-dark px-4 text-base leading-5 font-normal mx-4 link-after"
              >
                {link.title}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-end h-full w-auto">
            <Button paddingX="px-6" paddingY="py-2" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
