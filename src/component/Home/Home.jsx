import React from "react";
import Header from "../Header/Header";
import JobCatagory from "../JobCatagory/JobCatagory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Header></Header>

      <JobCatagory></JobCatagory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
