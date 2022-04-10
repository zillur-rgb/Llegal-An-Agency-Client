import React from "react";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import SignIn from "./SignIn";

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth]);
  return (
    <>
      <div>
        {user === null ? <SignIn /> : <h1>Welcome {user.displayName}</h1>}
      </div>
    </>
  );
};

export default Profile;
