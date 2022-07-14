import React from "react";
import { Route, Routes } from "react-router";
import Appoinments from "./Appoinments";
import Homepage from "./Homepage";
import Lawyers from "./Lawyers";
import Servicespage from "./Servicespage";
import SignIn from "./SignIn";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/appointments" element={<Appoinments />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default AllPages;
