import React from "react";

import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const featureJob = useLoaderData();
  console.log(featureJob);
  return (
    <div>
      <div className="bg-slate-50 h-40 pb-14">
        <h1 className="w-52 pt-14  h-10 text-3xl font-extrabold ml-auto mr-auto">
          Applied-Job
        </h1>
      </div>
    </div>
  );
};

export default AppliedJobs;
