import React from "react";
import Landing from "./components/Landing";
import Students from "./components/Students";
import Reviews from "./components/Reviews";

const Home = () => {
  return (
    <div>
      <Landing />
      <Students />
      {/* <Reviews /> */}
    </div>
  );
};

export default Home;
