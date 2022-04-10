import React, { useState } from "react";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  console.log(formData.name);
  console.log(formData.email);

  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="submit" className="logOut" onClick={handleSignOut}>
          Logout
        </button>
      </header>
    </div>
  );
};

export default Profile;
