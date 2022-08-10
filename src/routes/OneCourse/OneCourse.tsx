import React, { Fragment } from "react";
import Hero from "./components/Hero-course";
import ControlledAccordions from "../../components/Accordion";
import Footer from "../../components/Footer";
import Instructor from "./components/Instructor";
import Text from "../../components/Text";
import Reviews from "../Home/components/StudentReviews";
const HeroCourse = () => {
  return (
    <Fragment>
      <Hero />
      <br />
      <br />
      <ControlledAccordions />
      <br />
      <br />
      <Instructor />
      <br />
      <br />
      <Text text="People's with great vision" />
      <br />
      <br />
      <Reviews />
      <Footer />
    </Fragment>
  );
};

export default HeroCourse;
