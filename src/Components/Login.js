import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({ onLogin }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleUserLogin = (e) => {
    e.preventDefault();

    if (user.email && user.password) {
      validateUser();
    } else {
      alert("Username / Password cannot be blank");
    }
  };

  const validateUser = () => {
    if (user.email === "test@gmail.com" && user.password === "test123") {
      alert("You are logged in successfully");
      onLogin();
      navigate("/Home");
    } else {
      alert("Invalid Username or Password !! Please try again");
    }
  };

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
