import { useState, useRef } from "react";
import "./styles.css";
import { Link, NavLink, useHistory } from "react-router-dom";
function Signin() {
  let eml = localStorage.getItem("email");
  let pass = localStorage.getItem("password");
  const incorrect = useRef();
  let history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handleSignin = (e) => {
    e.preventDefault();
    if (email === eml && password === pass) {
      history.push("/");
    } else {
      incorrect.current.classList.remove("d-none");
    }
  };

  return (
    <div className="container">
      <div className="login-box bg-white px-4 pt-5 pb-3 rounded-8 shadow my-5 mx-auto">
        <div className="d-flex align-items-center justify-content-around mb-5">
          <NavLink
            to="/signin"
            className="text-decoration-none text-primary-color fw-bold fs-24"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="text-decoration-none text-tertiary-color fw-bold fs-24"
          >
            Sign up
          </NavLink>
        </div>
        <form action="" className="px-sm-4">
          <input
            type="email"
            className="form-control mb-4 bg-acent border-0 rounded-8"
            placeholder="Email"
            onChange={(e) => {
              handleemail(e);
            }}
            onFocus={() => {
              incorrect.current.classList.add("d-none");
            }}
          />
          <input
            type="password"
            className="form-control mb-2 bg-acent border-0 rounded-8"
            placeholder="password"
            onChange={(e) => {
              handlepassword(e);
            }}
            onFocus={() => {
              incorrect.current.classList.add("d-none");
            }}
          />
          <p
            ref={incorrect}
            className="mb-0 d-none text-center small pt-2 text-danger text-capitalize"
          >
            {" "}
            email or password is incorrect
          </p>
          <Link to="/" className="text-primary-color fs-10 fw-600 ">
            Forgot password?
          </Link>
          <button
            className="bg-secondary-color fw-600 w-100 btn my-4 rounded-pill text-white"
            onClick={handleSignin}
          >
            Login
          </button>
        </form>
        <p className="text-center fs-14 fw-600 text-primary-color">
          You don’t have an account?
          <NavLink to="/signup" className="text-primary-color">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signin;
