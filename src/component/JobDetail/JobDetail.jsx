import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./JobDetail.css";
import {
  BeakerIcon,
  CurrencyDollarIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../utilities/fakedb";

const JobDetail = () => {
  const job = useLoaderData();
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirement,
    experience,
    salary,
    jobTitle,
    phone,
    address,
    email,
    id,
  } = job;
  const handleApplyNow = (id) => {
    console.log(id);
    addToDb(id);
  };
  return (
    <div>
      <div className="bg-slate-50 h-40 pb-14">
        <h1 className="w-44 pt-14  h-10 text-3xl font-extrabold ml-auto mr-auto">
          Job Details
        </h1>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 ml-10 md:ml-36">
        <div className="job-desCription pr-10 mr-10">
          <h1 className="sape mb-6">
            <span className="text-xl font-bold">JobDescription: </span>
            {jobDescription}
          </h1>

          <h1 className="sape-2 mb-6">
            <span className="text-xl font-bold ">JobResponsibility: </span>
            {jobResponsibility}
          </h1>

          <h1 className="sape-3 mb-6">
            <span className="text-xl font-bold mb-4">
              educationalRequirement:
            </span>
            {educationalRequirement}
          </h1>

          <h1 className="sape-4 mb-6">
            <span className="text-xl font-bold">experience: </span>
            {experience}
          </h1>
        </div>
        <div className="job-detail-box">
          <div className="job-detail ml-5 md:ml-24 pl-7 pt-7">
            <h1 className="text-2xl font-bold mb-7">Job-Details</h1>
            <div className="mb-5">
              <div className="flex ">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-500 mr-2" />
                <h1>
                  {" "}
                  <span className="text-xl font-bold">Salary: </span> {salary}
                </h1>
              </div>
              <div className="flex">
                <CalendarIcon className="h-6 w-6 text-gray-500 mr-2" />
                <h1>
                  <span className="text-xl font-bold">Job-Title: </span>{" "}
                  {jobTitle}
                </h1>
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold">Contact-Information</h1>
            <hr className="mb-4 h-1 mr-4 bg-blue-200" />
            <h1 className="mb-4">
              <span className="text-xl font-bold">Phone: </span> {phone}
            </h1>
            <h1 className="mb-4">
              <span className="text-xl font-bold">Email: </span> {email}
            </h1>
            <h1 className="mb-4">
              <span className="text-xl font-bold">Address: </span> {address}
            </h1>
          </div>
          <span
            onClick={() => handleApplyNow(id)}
            className="apply-btn-span  mt-5 ml-24"
          >
            <button className=" w-40 h-10 mb-2">Apply now</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
