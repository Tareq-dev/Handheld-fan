import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="mt-4">
      <ul className="flex bg-black py-2 uppercase md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
        <li className="mx-3">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Reviews
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Blogs
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
