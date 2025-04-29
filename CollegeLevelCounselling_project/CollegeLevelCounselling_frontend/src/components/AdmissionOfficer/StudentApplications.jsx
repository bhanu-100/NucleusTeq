import React from "react";
import StudentTable from "../Table/StudentTable";

const StudentApplications = () => {

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
        Admission Officer Portal
      </h1>

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

export default StudentApplications;
