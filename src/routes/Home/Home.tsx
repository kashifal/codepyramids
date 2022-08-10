import React, { Fragment } from "react";
import Landing from "./components/Landing";
import Students from "./components/Students";
import Reviews from "./components/Reviews";
import Footer from "../../components/Footer";
import MySlider from "../../components/MySlider";
import OurTeachers from "./components/OurTeachers";
import StudentReviews from "./components/StudentReviews";
import Kid from "./components/Kid";
import ScheduleClassBtn from "../../components/SheduleClassBtn";
import Text from "../../components/Text";
import Companies from "../../components/Companies";
const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Students />
      <OurTeachers />
      <MySlider age="6" />
      <StudentReviews />
      <MySlider age="10" />
      <Text text="Learn from Market Experts" />
      <Companies />
      <Kid />
      <ScheduleClassBtn />
      {/* <MySlider /> */}

      <Footer />
    </Fragment>
  );
};

export default Home;
