import React, { useEffect, useState } from "react";
import GetDataFetch from "../../api/GetDataFetch";
import FetchApi from "../../api/Fetch"

const OfficerTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await GetDataFetch("officerTable"); // Fetch from officerTable API
      setData(response || []); // Ensure data is an array to prevent errors
    }
    fetchData();
  }, []);

  const handleRemoveOfficer = async (email) => {
    const data = {email}
    const res = await FetchApi(data,"removeAdmissionOfficer")
    console.log(res);
    alert("Admin remove successful!")
    window.location.reload();
  };


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Officer Email</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((officer, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{officer.email}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleRemoveOfficer(officer.email)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="px-6 py-4 text-center text-gray-500">
                No officers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OfficerTable;
