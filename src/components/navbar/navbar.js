import React from "react";
import OutlinedButtons from "./../button/button";
import "./navbar.css";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <div className="navbar"
    >
      <ul>
        <li className="li">Services</li>
        <li className="li">Blog</li>
        <li className="li">Review</li>
        <li className="li">Forms</li>
        <li className="li"><OutlinedButtons buttonText="Sign Up" /></li>
        <li className="nav_icon"><MenuIcon /></li>
      </ul>
    </div>
  );
};

export default Navbar;
