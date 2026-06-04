import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Bookings from "./pages/Bookings/Bookings";
import StudentProgress from "./pages/StudentProgress/StudentProgress";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcourse" element={<Add />} />
      <Route path="/listcourse" element={<List />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/student-progress" element={<StudentProgress />} />
    </Routes>
  );
};

export default App;
