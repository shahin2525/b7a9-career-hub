import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-50 pt-2 pl-5 md:pl-60 pr:5 md:pr-40 height">
      <div className="header-description pt-24 md:pl-5">
        <h2 className="md:text-6xl md:font-extrabold md:leading-tight">
          One Step Closer To Your
          <span className="text-blue-400"> Dream Job</span>
        </h2>
        <p className="text-lg font-medium leading-7 mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="text-sm font-extrabold text-white bg-blue-400 h-16 w-40 rounded-lg mt-6">
          Get Started
        </button>
      </div>
      <div className="pl-12 img">
        <img className="pl-12" src="/src/assets/Image/profile2.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
