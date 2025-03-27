import React, { useEffect, useState } from "react";
import GetDataFetch from "../../api/GetDataFetch";

const DummyStudentTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await GetDataFetch("top15StudentTable");
      setData(response || []);  // Ensure data is an array to prevent errors
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Student Name</th>
            <th scope="col" className="px-6 py-3">Roll Number</th>
            <th scope="col" className="px-6 py-3">Rank</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((student, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {student.fullName}
                </th>
                <td className="px-6 py-4">{student.rollno}</td>
                <td className="px-6 py-4">{student.rank}</td>
                <td className={`px-6 py-4 font-semibold ${
                  student.status === "accept" ? "text-green-600" : 
                  student.status === "pending" ? "text-yellow-600" : 
                  student.status === "reject" ? "text-red-600" : 
                  "text-red-600"
                }`}>
                  {student.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DummyStudentTable;
