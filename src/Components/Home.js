import React from "react";
import UserCard from "./UserCard";

function Home({ onLogout }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <label to="/Home" className="navbar-brand">
            Home
          </label>
          <div className="d-grid gap-2 d-md-flex justify-content-md-s-end">
            <button
              onClick={onLogout}
              type="button"
              className="btn btn-primary"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="container my-4">
      <h2 className="text-center">User List</h2>
      <div className="container my-4">
      <UserCard></UserCard>
      </div>
          
      </div>
    </div>
  );
}

export default Home;
