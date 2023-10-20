import React, { useState } from "react";
import axios from "axios";
import SignUpForm from "./signup";

const SigninForm = (props) => {
  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState('');

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    axios.post("http://localhost:5000/user/login", loginData)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        setMsg(response.data.message );
        localStorage.setItem("LoginState", true);
        props.onLoginSuccess();
        props.togglelog();
      })
      .catch(error => {
        setMsg(error.response.data.message);
      });
  };

  return (
    <form className="dropdown-menu p-4">
      <p className="text-center mb-4 text-danger">{msg}</p>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Sign in
      </button>
      <div className="dropdown-divider"></div>
      <p className="dropdown-item" onClick={toggleSignup}>New around here? Sign up</p>

      {showSignup && (
        <div className="signup-form-overlay">
          <div className="signup-form">
            <SignUpForm toggleSignup={toggleSignup} togglelog={props.togglelog} />
          </div>
        </div>
      )}

      <p className="dropdown-item">Forgot password?</p>
    </form>
  );
};

export default SigninForm;
