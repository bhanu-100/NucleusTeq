import React from 'react';
import DummyStudentTable from "../Table/DummyStudentTable";
import VaccantSeatTable from "../Table/VaccantSeatTable";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Top 15 Students Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-4xl mb-8">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 text-center mb-4">
          🏆 Top 15 Students
        </h1>
        <DummyStudentTable />
      </div>

      {/* Vacant Seats Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 text-center mb-4">
          🏫 Vacant Seats
        </h1>
        <VaccantSeatTable />
      </div>
    </div>
  );
};

export default Home;
