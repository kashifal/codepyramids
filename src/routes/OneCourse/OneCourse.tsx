import React, { Fragment } from "react";
import Hero from "./components/Hero-course";
import ControlledAccordions from "../../components/Accordion";
import Footer from "../../components/Footer";
const HeroCourse = () => {
  return (
    <Fragment>
      <Hero />

      <ControlledAccordions />

      <Footer />
    </Fragment>
  );
};

export default HeroCourse;
