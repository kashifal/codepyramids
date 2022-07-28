import React, { Fragment } from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggin = useSelector((state) => console.log(state));
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

export default App;
