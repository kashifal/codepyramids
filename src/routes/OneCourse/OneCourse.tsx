import React, { Fragment } from "react";
import Hero from "./components/Hero-course";
import ControlledAccordions from "../../components/Accordion";
import Footer from "../../components/Footer";
import Instructor from "./components/Instructor";
import Text from "../../components/Text";
import CoureReviews from "./components/CourseReviews";
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
      <Text text="💖 Loved by students !!!" />
      <br />
      <br />
      <CoureReviews />
      <br />
      <Footer />
    </Fragment>
  );
};

export default HeroCourse;
