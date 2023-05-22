import React from "react";

import { useLoaderData } from "react-router-dom";
import SavedJob from "../SavedJob/SavedJob";
import "./AppliedJobs.css";

const AppliedJobs = () => {
  const savedJobs = useLoaderData();
  console.log(savedJobs);
  return (
    <div>
      <div className="bg-slate-50 h-40 pb-14">
        <h1 className="w-52 pt-14  h-10 text-3xl font-extrabold ml-auto mr-auto">
          Applied-Job
        </h1>
      </div>
      <div className="saved-job">
        {/* <button>ali baba</button> */}
        {savedJobs.map((savedJob) => (
          <SavedJob key={savedJob.id} savedJob={savedJob}></SavedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
