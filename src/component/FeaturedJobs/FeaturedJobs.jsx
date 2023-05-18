import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const FeaturedJobs = () => {
  const [features, setFeatures] = useState([]);
  const [ShowAll, setShowAll] = useState(false);
  const handleData = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch("featured.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="mt-16 ml-3 md:ml-200 mr-4 md:mr-200">
      <h1 className="text-center text-5xl font-extrabold">Featured Jobs</h1>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2 mt-5 ml-4 md:ml-28 mr-4 md:mr-20">
        {features.slice(0, ShowAll ? 8 : 4).map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </div>

      <span
        onClick={handleData}
        className="flex justify-center items-center mt-10 mb-7 bg-blue-500 h-16 w-40 rounded-lg ml-auto mr-auto"
      >
        <button className="">Show All</button>
      </span>
    </div>
  );
};

export default FeaturedJobs;
