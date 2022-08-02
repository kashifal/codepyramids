import React, { Fragment } from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Home from "./routes/Home/Home";

const App = () => {
  // const isLoggin = useSelector((state) => console.log(state));
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
