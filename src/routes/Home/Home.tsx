import React from "react";
import Landing from "./components/Landing";
import Students from "./components/Students";
import Reviews from "./components/Reviews";
import Courses from "./components/Courses";
import Footer from "../../components/Footer";
import MySlider from "../../components/MySlider";
import OurTeachers from "./components/OurTeachers";
import StudentReviews from "./components/StudentReviews";

const Home = () => {
  return (
    <div>
      <Landing />
      <Students />
      <OurTeachers />

      <StudentReviews />
      <Footer />
    </div>
  );
};

export default Home;
