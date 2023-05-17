import React from "react";
import Header from "../Header/Header";
import JobCatagory from "../JobCatagory/JobCatagory";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="text-center mt-14 h-10 text-4xl border-l">
        Job Category List
      </h1>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <JobCatagory></JobCatagory>
    </div>
  );
};

export default Home;
