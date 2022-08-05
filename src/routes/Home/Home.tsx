import React, { Fragment } from "react";
import Landing from "./components/Landing";
import Students from "./components/Students";
import Reviews from "./components/Reviews";
import Courses from "./components/Courses";
import Footer from "../../components/Footer";
import MySlider from "../../components/MySlider";
import OurTeachers from "./components/OurTeachers";
import StudentReviews from "./components/StudentReviews";
import Kid from "./components/Kid";
import Text from "../../components/Text";
const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Students />
      <OurTeachers />
      <MySlider />
      <StudentReviews />
      <MySlider />
      <Text />
      <Kid />
      {/* <MySlider /> */}

      <Footer />
    </Fragment>
  );
};

export default Home;
