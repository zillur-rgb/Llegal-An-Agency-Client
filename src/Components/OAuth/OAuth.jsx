import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/svg/googleIcon.svg";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase.init.js";
import { toast } from "react-toastify";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleLogin = async () => {
    try {
      //Signing in with google
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Checking in db if user is already in the database
      const docSnap = await getDoc(doc(db, "users", user.uid));

      //Adding data to the database
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Could not signin with google");
    }
  };
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with </p>
      <button className="sociaIconDiv" onClick={handleGoogleLogin}>
        <img
          src={googleIcon}
          className="socialIconImg"
          alt="Google"
          height="24px"
        />
      </button>
    </div>
  );
};

export default OAuth;
