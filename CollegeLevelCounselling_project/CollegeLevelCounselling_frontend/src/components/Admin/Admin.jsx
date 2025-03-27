import React from 'react';
import OfficerTable from "../Table/OfficerTable";
import { useState } from 'react';
import FetchApi from "../../api/Fetch"

const Admin = () => {

  const [email, setEmail] = useState("")
  async function handleAddAdmin() {
    const data = {email}
    const res = await FetchApi(data,"addAdmissionOfficer")
    alert("Admin added successful!")
    window.location.reload();
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
        Manage Admission Officers
      </h1>

      {/* Form Container */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4 text-center">
          Add Admission Officers
        </h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Officer's Email
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M10.036 8.278 19.294.488A1.979 1.979 0 0 0 18 0H2C.89 0 0 .89 0 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V2.5L10.036 8.278Z"/>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="block w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                placeholder="Enter officer's email"
              />
            </div>
          </div>

          {/* Action button */}
          <div className="flex justify-center">
            <button onClick={handleAddAdmin} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
              ➕ Add Officer
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 text-center mb-4">
          📋 Officer List
        </h2>
        <OfficerTable />
      </div>
    </div>
  );
};

export default Admin;
