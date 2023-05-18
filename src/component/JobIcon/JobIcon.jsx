import React from "react";

const JobIcon = (props) => {
  // console.log(props);
  const { postName, vacancy, icon } = props.icon;
  // console.log(icon);

  return (
    <div className="w-72 h-52 rounded-sm  bg-sky-50 mt-10">
      <div className="h-28 w-28 p-5 flex items-center justify-center bg-sky-100 ml-8 mt-8">
        <img className="h-16 w-16" src={icon} alt="" />
      </div>
      <div className="text-center pr-1 md:pr-28 ">
        <h2 className="text-lg">{postName}</h2>
        <h2>{vacancy} jobs available</h2>
      </div>
    </div>
  );
};

export default JobIcon;
