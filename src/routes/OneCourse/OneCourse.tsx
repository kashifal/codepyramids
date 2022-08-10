import React from "react";
import { PopupWidget } from "react-calendly";

const OneCourse = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/captainkashi4"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")!}
        text="Scdeule free demo class"
        textColor="#ffffff"
        color="#de00a5"
      />
    </div>
  );
};

export default OneCourse;
