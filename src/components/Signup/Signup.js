import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Signup() {
  let history = useHistory();
  const incorrect = useRef();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const handlefname = (e) => {
    setfname(e.target.value);
  };
  const handlelname = (e) => {
    setlname(e.target.value);
  };
  const handlephone = (e) => {
    setphone(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handleRepassword = (e) => {
    setrepassword(e.target.value);
  };
  const handleSignup = (e) => {
    e.preventDefault();
    if (password == repassword) {
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("phone", phone);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("repassword", repassword);
      history.push("/signin");
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
            className="text-decoration-none text-tertiary-color fw-bold fs-24"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="text-decoration-none fw-bold text-primary-color fs-24"
          >
            Sign up
          </NavLink>
        </div>
        <form action="" className="px-sm-4">
          <input
            type="text"
            className="form-control mb-4 bg-acent border-0 rounded-8"
            placeholder="First Name"
            onChange={(e) => handlefname(e)}
          />
          <input
            type="text"
            className="form-control mb-4 bg-acent border-0 rounded-8"
            placeholder="Last Name"
            onChange={(e) => handlelname(e)}
          />
          <input
            type="tel"
            className="form-control mb-4 bg-acent border-0 rounded-8"
            placeholder="Phone number"
            onChange={(e) => handlephone(e)}
          />
          <input
            type="text"
            className="form-control mb-4 bg-acent border-0 rounded-8"
            placeholder="Email"
            onChange={(e) => handleemail(e)}
          />
          <input
            type="password"
            className="form-control mb-4 bg-acent border-0 rounded-8"
            placeholder="password"
            onChange={(e) => handlepassword(e)}
          />
          <input
            type="password"
            className="form-control mb-2 bg-acent border-0 rounded-8"
            placeholder="Re password"
            onChange={(e) => handleRepassword(e)}
            onFocus={() => {
              incorrect.current.classList.add("d-none");
            }}
          />
          <p
            ref={incorrect}
            className="mb-0 text-center d-none small text-danger"
          >
            incorrect password
          </p>
          <button
            className="bg-secondary-color fw-600 w-100 btn my-4 rounded-pill text-white"
            onClick={handleSignup}
          >
            Login
          </button>
        </form>
        <p className="text-center fs-14 fw-600 text-primary-color">
          Already have an accoun?
          <NavLink to="/signin" className="text-primary-color">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
