import React, { Fragment } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface pro {
  paddingX: string;
  paddingY: string;
}

const Button = (props: pro) => {
  return (
    <Fragment>
      <button
        className={`${props.paddingX} ${props.paddingY} bg-primary text-white font-medium rounded `}
      >
        Sign in{"  "}
        <span className="text-sm"></span>
      </button>
    </Fragment>
  );
};

export default Button;
