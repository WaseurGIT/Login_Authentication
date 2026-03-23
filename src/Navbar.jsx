import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center gap-3">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
