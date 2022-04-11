import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibility from "../assets/svg/visibilityIcon.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import OAuth from "../Components/OAuth/OAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      if (userCred.user) {
        navigate("/");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Error User Credentials");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="emailInput"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              id="password"
              className="passwordInput"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <img
              src={visibility}
              alt="Show password"
              className="showPassword"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <OAuth />

        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
};

export default SignIn;
