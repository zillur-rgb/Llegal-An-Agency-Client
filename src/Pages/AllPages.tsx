import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./Homepage";
import Servicespage from "./Servicespage";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Servicespage />} />
      </Routes>
    </div>
  );
};

export default AllPages;
