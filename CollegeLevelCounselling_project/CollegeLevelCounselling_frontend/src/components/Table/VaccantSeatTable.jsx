import React, { useEffect, useState } from "react";
import GetDataFetch from "../../api/GetDataFetch";

const VacantSeatTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await GetDataFetch("seatTable");
      setData(response || []); // Ensure data is an array to prevent errors
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Branch</th>
            <th scope="col" className="px-6 py-3">Total Seats</th>
            <th scope="col" className="px-6 py-3">Vacant Seats</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((seat, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{seat.branch}</td>
                <td className="px-6 py-4">{seat.seats}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    seat.vacantSeats > 10
                      ? "text-green-500"
                      : seat.vacantSeats > 5
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {seat.vacantSeats}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VacantSeatTable;
