import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="flex justify-evenly flex-col md:flex-row items-center pt-6 md:pt-6 bg-slate-50 h-36">
      <p className="font-bold text-2xl mb-4 md:mb-0 ">JobOffer</p>
      <div className="mb-5 md:mb-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 mr-4" : "mr-4"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/statistic"
          className={({ isActive }) =>
            isActive ? "text-blue-400 mr-4" : "mr-4"
          }
        >
          Statistic
        </NavLink>
        <NavLink
          to="/apply"
          className={({ isActive }) =>
            isActive ? "text-blue-400 mr-4" : "mr-4"
          }
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-blue-400 mr-4" : "mr-4"
          }
        >
          Blog
        </NavLink>
      </div>
      <button className="w-32 h-16 bg bg-gradient-to-r from-cyan-500 to-blue-400 text-slate-50">
        Start Applying
      </button>
    </div>
  );
};

export default Nav;
