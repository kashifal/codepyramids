import React from "react";
import { PopupWidget } from "react-calendly";

const OneCourse = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/captainkashi4"
        rootElement={document.getElementById("root")!}
        text="Scdeule free demo class"
        textColor="#ffffff"
        color="#FF9A00"
      />
    </div>
  );
};

export default OneCourse;