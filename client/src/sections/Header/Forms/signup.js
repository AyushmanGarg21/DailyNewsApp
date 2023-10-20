import React, { useState } from "react";
import axios from "axios";

const SignUpForm = (props) => {
  const [userData, setUserData] = useState({ fullName: "", email: "", password: "" });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignUp = () => {
    if (!userData.fullName || !userData.email || !userData.password) {
      setMsg("Please enter all required details.");
      return;
    }
    axios.post("http://localhost:5000/user/register", userData)
    .then(response => {
      setMsg(response.data.message);
      console.log(response.data.message);
    })
    .catch(error => {
      setMsg(error.response.data.message);
      console.error("Error registering user", error);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <form className="border p-4 rounded shadow">
        <p className="text-center mb-4">{msg}</p>
        <h2 className="text-center mb-4">Create Account</h2>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-sm" onClick={handleSignUp}>Sign Up</button>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <button className="btn btn-primary btn-sm" onClick={props.toggleSignup}>Close</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
