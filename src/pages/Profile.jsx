import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.init";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const auth = getAuth();

  const [changeData, setChangeData] = useState(false);

  const [email, setEmail] = useState(auth.currentUser.email);
  const [name, setName] = useState(auth.currentUser.displayName);

  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };

  const handleNameChange = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        //Update in Firestore
        await updateDoc(doc(db, "users", auth.currentUser.uid), { name });
      }
    } catch (error) {
      toast.error("could not update profile details");
    }
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="submit" className="logOut" onClick={handleSignOut}>
          Logout
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Profile</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeData && handleNameChange();
              setChangeData(!changeData);
            }}
          >
            {changeData ? "done" : "change"}
          </p>
        </div>

        <div>
          <form onSubmit={handleNameChange}>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              className={!changeData ? "profileName" : "profileNameActive"}
              disabled={!changeData}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />

            <input
              type="email"
              name="email"
              id="email"
              className="profileEmail"
              disabled={true}
              value={email}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
