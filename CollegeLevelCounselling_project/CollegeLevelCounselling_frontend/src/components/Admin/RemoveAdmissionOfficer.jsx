import React from 'react';
import OfficerTable from "../Table/OfficerTable";

const RemoveAdmissionOfficer = () => {

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
        Remove Admission Officers
      </h1>

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

export default RemoveAdmissionOfficer;
