import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({ onLogin }) {

// Create a hook with an object having required form fields.  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Calling useNavigate to route to different page.
  const navigate = useNavigate();

  // Assigning input values to respective state variables.
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // Function to check if form isn't submitted empty.
  const handleUserLogin = (e) => {
    e.preventDefault();

    if (user.email && user.password) {
      validateUser();
    } else {
      alert("Username / Password cannot be blank");
    }
  };

// Function  to do a basic validation once the user click the login button.
  const validateUser = () => {
    if (user.email === "test@gmail.com" && user.password === "test123") {
      alert("You are logged in successfully");
      onLogin();
      navigate("/Home");
    } else {
      alert("Invalid Username or Password !! Please try again");
    }
  };

  // UI component of login page
  return (
    <>
      <div className="container mt-5 p-5 border border-5 col-lg-4">
        <form onSubmit={handleUserLogin}>
          <h1 className="text-center">
            <u>User Login</u>
          </h1>
          <div className="mb-3 my-4 text-center">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control text-center col-4 mx-auto"
              id="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter Username or Email"
            />
          </div>
          <div className="mb-3 text-center">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control text-center"
              id="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary col-4 mx-auto">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
