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
    <div>
      <h1 className="text-center mt-14 h-10 text-3xl font-extrabold">
        Job Category List
      </h1>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 md:mt-5 ml-28 md:ml-40 mr-4 md:mr-36 ">
        {icons.map((icon) => (
          <JobIcon key={icon.id} icon={icon}></JobIcon>
        ))}
      </div>
    </div>
  );
};

export default JobCatagory;
