import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibility from "../assets/svg/visibilityIcon.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const onChange = () => {};
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back</p>
        </header>

        <form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="nameInput"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />

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

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* Google OAuth */}

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
};

export default SignUp;
