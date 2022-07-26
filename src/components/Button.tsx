import React, { Fragment } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface pro {
  paddingX: string;
  paddingY: string;
}

const Button = (props: pro) => {
  console.log(
    `${props.paddingX} ${props.paddingY} bg-primary text-white font-bold rounded btn-after`
  );

  return (
    <Fragment>
      <button
        className={`${props.paddingX} ${props.paddingY} bg-primary text-white font-bold rounded btn-after`}
      >
        Register{"  "}
        <span className="text-sm">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </button>
    </Fragment>
  );
};

export default Button;
