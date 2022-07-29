import React, { Fragment } from "react";

interface pro {
  paddingX: string;
  paddingY: string;
}

const Button = (props: pro) => {
  return (
    <Fragment>
      <button
        className={`${props.paddingX} ${props.paddingY}  border-2 border-custom-primary hover:text-custom-primary font-light rounded bg-custom-primary text-white leading-5  hover:bg-white mx-0 `}
      >
        Register
      </button>
    </Fragment>
  );
};

export default Button;
