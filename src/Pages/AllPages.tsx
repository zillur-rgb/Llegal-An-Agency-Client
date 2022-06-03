import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./Homepage";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default AllPages;
