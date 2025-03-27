import React from "react";
import StudentTable from "../Table/StudentTable";
import { useState } from "react";
import FetchApi from "../../api/Fetch";

const AdmissionOfficer = () => {
  const [branch, setBranch] = useState("Computer Engineering")
  const [seats,setSeats] = useState("00")
   
  async function handleSubmit() {
     const data = {branch,seats};
     let res=await FetchApi(data,"updateSeats") 
     console.log(data)
     console.log(res)
      alert("seats updated Successful!");
  }

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
        Admission Officer Portal
      </h1>

      {/* Update Seats Section */}
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 text-center mb-4">
          Update Vacant Seats
        </h2>

        {/* Form */}
        <div className="space-y-5">
          {/* Branch Selection */}
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Select Branch
            </label>
            <select
              id="branch"
              onChange={(e)=>{setBranch(e.target.value)}}
              className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
            >
              <option value={"Computer Engineering"}>Computer Engineering</option>
              <option value={"Civil Engineering"}>Civil Engineering</option>
              <option value={"Electrical Engineering"}>Electrical Engineering</option>
              <option value={"Mechanical Engineering"}>Mechanical Engineering</option>
              <option value={"Chemical Engineering"}>Chemical Engineering</option>
              <option value={"Mining Engineering"}>Mining Engineering</option>
            </select>
          </div>

          {/* Seats Input */}
          <div>
            <label htmlFor="seats" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Add Seats
            </label>
            <input
              type="text"
              id="seats"
              value={seats}
              onChange={(e)=>{setSeats(e.target.value)}}
              className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              placeholder="Enter number of seats"
              min="1"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button onClick={handleSubmit} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
              ➕ Add Seats
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 text-center mb-4">
          📋 Student Applications
        </h2>
        <StudentTable />
      </div>
    </div>
  );
};

export default AdmissionOfficer;
