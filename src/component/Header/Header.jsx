import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-evenly items-center pt-6 bg-slate-50 h-36">
      <p>JobOffer</p>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "bg-red-300" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/statistic"
          className={({ isActive }) => (isActive ? "bg-red-300" : "")}
        >
          Statistic
        </NavLink>
        <NavLink
          to="/apply"
          className={({ isActive }) => (isActive ? "bg-red-300" : "")}
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "bg-red-300" : "")}
        >
          Blog
        </NavLink>
      </nav>
      <button>Start Applying</button>
    </div>
  );
};

export default Header;
