import React, { Fragment } from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Home from "./routes/Home/Home";
import Login from "./routes/Registeration/Login";
import Register from "./routes/Registeration/Register";
import ForgetPassword from "./routes/Registeration/ForgetPassword";
import { Route, Routes, Navigate } from "react-router-dom";
import AllCourses from "./routes/Courses/AllCourses";
import OneCourse from "./routes/OneCourse/OneCourse";

const App = () => {
  // const isLoggin = useSelector((state) => console.log(state));
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/course/:id" element={<OneCourse />} />
      </Routes>
    </div>
  );
};

export default App;
