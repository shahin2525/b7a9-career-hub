import React from "react";
import {
  BeakerIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import "./SavedJob.css";
import { Link, useNavigate } from "react-router-dom";

const SavedJob = ({ savedJob }) => {
  console.log(savedJob);
  const {
    companyName,
    companyLogoUrl,
    jobTitle,
    jobType,
    jobLocation,
    salary,
    id,
  } = savedJob;

  const navigate = useNavigate();
  const showViewDetails = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="saved-job-box ">
      {/* <div className="saved-job"> */}
      <div className=" flex justify-center items-center bg-gray-50 w-60 h-48 ml-20 mt-2">
        <img
          className="h-13 w-40 mt-8 ml-2  mb-5"
          src={companyLogoUrl}
          alt=""
        />
      </div>
      <div className="ml-10">
        {" "}
        <h1 className="mb-3 ml-2 md:ml:10 pl-2 md:pl-8 text-2xl font-extrabold">
          {jobTitle}
        </h1>
        <h1 className="ml-2 md:ml:10 pl-2 md:pl-8 font-semibold text-xl">
          {companyName}
        </h1>
        <h1 className="ml-10 md:ml:10 pl-2 md:pl-0 job-type text-center mt-3">
          {jobType}
        </h1>
        <div className="ml-2 md:ml:10 pl-2 md:pl-8 mt-3 mb-2 flex">
          <MapPinIcon className="h-6 w-6 text-gray-400" />
          <h1 className="mr-4"> {jobLocation}</h1>
          <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
          <h1>salary: {salary}</h1>
        </div>
      </div>

      <button
        onClick={showViewDetails}
        className="ml-20 mt-14 pt-2 bg-blue-400 h-14 w-40 rounded text-xl pb-5"
      >
        view-details
      </button>

      {/* <div>
        <button
          onClick={showViewDetails}
          className="ml-10 mt-24 pl-8 mt-3 h-12 w-40 bg-blue-400 rounded-lg absolute bottom-2"
        >
          View-Details
        </button>
      </div> */}
    </div>
  );
};

export default SavedJob;
