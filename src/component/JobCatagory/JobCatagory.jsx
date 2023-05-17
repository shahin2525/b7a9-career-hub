import React, { useEffect, useState } from "react";
import JobIcon from "../JobIcon/JobIcon";

const JobCatagory = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch("jobCatagory.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 md:ml-40 mr-4 md:mr-36 ">
      {icons.map((icon) => (
        <JobIcon key={icon.key} icon={icon}></JobIcon>
      ))}
    </div>
  );
};

export default JobCatagory;
