import React from "react";
import "./Feature.css";
import { Link, useNavigate } from "react-router-dom";
import {
  BeakerIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  // console.log(feature);
  const {
    companyName,
    id,
    jobLocation,
    jobTitle,
    jobType,
    salary,
    companyLogoUrl,
  } = feature;
  const navigate = useNavigate();
  const showViewDetails = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="feature-box">
      <img
        className="h-13 w-40 mt-8 ml-2 md:ml-10 mb-5"
        src={companyLogoUrl}
        alt=""
      />
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

      {/* <Link to={`/detail/${id}`}> */}
      <button
        onClick={showViewDetails}
        className="ml-10 md:ml:10 pl-2 md:pl-8 mt-3 h-12 w-40 bg-blue-400 rounded-lg absolute bottom-2"
      >
        View-Details
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Feature;
