import React from "react";
import Landing from "./components/Landing";
import Students from "./components/Students";
import Reviews from "./components/Reviews";
import Courses from "./components/Courses";
import MySlider from "../../components/MySlider";
import OurTeachers from "./components/OurTeachers";

const Home = () => {
  return (
    <div>
      <Landing />
      <Students />
      <Reviews />
      <Reviews />

      <OurTeachers />
      <Reviews />
    </div>
  );
};

export default Home;
