import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-50">
      <div>
        <h2>I am one stop </h2>
      </div>
      <img className="img" src="/src/assets/Image/profile2.png" alt="" />
    </div>
  );
};

export default Header;
