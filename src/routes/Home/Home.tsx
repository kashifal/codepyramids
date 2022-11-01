import React, { Fragment } from "react";
import Landing from "./components/Landing";
import Students from "./components/Students";
// import Reviews from "./components/Reviews";
import Footer from "../../components/Footer";
import MySlider from "../../components/MySlider";
import OurTeachers from "./components/OurTeachers";
import StudentReviews from "./components/StudentReviews";
import Kid from "./components/Kid";
import ScheduleClassBtn from "../../components/SheduleClassBtn";
import Text from "../../components/Text";
import Companies from "../../components/Companies";
import CoureReviews from "../OneCourse/components/CourseReviews";
import Reviews from "../../components/reviews";
const Home = () => {
  return (
    <div className="bg-custom-dark">
      <Landing />
      <Students />
      <OurTeachers />
      <MySlider age="Featured Web Development Courses" />
      <Reviews />
      <Companies />
      <Kid />
      <ScheduleClassBtn />

      <Footer />
    </div>
  );
};

export default Home;
