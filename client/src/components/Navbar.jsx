import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <span className="logo-icon"><img src="/src/assets/companies/icon.svg" alt="logo" /></span> {/* replace with real logo/image */}
        <h2>JobHuntly</h2>
      </div>

      {/* Center: Links */}
      <ul className="navbar-links">
        <li><a href="#">Find Jobs</a></li>
        <li><a href="#">Browse Companies</a></li>
      </ul>

      {/* Right: Buttons */}
      <div className="navbar-actions">
        <a href="#" className="login">Login</a>
        <div className="line"></div>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
