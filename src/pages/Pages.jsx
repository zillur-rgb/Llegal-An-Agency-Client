import React from "react";
import { Route, Routes } from "react-router-dom";
import Explore from "../Components/Explore";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Profile from "./Profile";
import Offers from "./Offers";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default Pages;
