import React, { Fragment } from "react";
import Hero from "./components/Hero-course";
import ControlledAccordions from "../../components/Accordion";
import Footer from "../../components/Footer";
import Instructor from "./components/Instructor";
import Text from "../../components/Text";
import Goal from "./components/Goal";
import CoureReviews from "./components/CourseReviews";
import Req from "./components/Requirements";
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
      <Goal />
      <Req />
      <br />
      <Text text="💝 Loved by students !!!" />
      <br />
      <br />
      <CoureReviews />
      <br />
      <Footer />
    </Fragment>
  );
};

export default HeroCourse;
