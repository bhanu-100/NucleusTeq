import React, { useEffect, useState } from "react";
import GetDataFetch from "../../api/GetDataFetch";
import Fetch from "../../api/Fetch";
import { useNavigate } from "react-router";

const StudentTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let response = await GetDataFetch("allStudentTable");
      setData(response || []); // Ensure data is an array to prevent errors
      console.log(response);
    }
    fetchData();
  }, []);

  const handleEdit = (student) => {
    // Implement edit functionality
    console.log("Editing student:", student);
    navigate("/editstudentdetails", { state: { student } });
  };

  const handleAccept = async (email) => {
    // Call API to update student status to "Admitted"
    const data = {email};
    const res = await Fetch(data,"acceptStudent")
    console.log("Accepting student email:", email);
    console.log(res);
    window.location.reload();
  };

  const handleReject = async (email) => {
    // Call API to update student status to "Rejected"
    const data = {email};
    const res = await Fetch(data,"rejectStudent")
    console.log("Rejecting student ID:", email);
    console.log(res);
    window.location.reload();
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Student Name</th>
            <th scope="col" className="px-6 py-3">Roll Number</th>
            <th scope="col" className="px-6 py-3">Rank</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((student, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {student.fullName}
                </th>
                <td className="px-6 py-4">{student.rollno}</td>
                <td className="px-6 py-4">{student.rank}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    student.status === "accept"
                      ? "text-green-600"
                      : student.status === "pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {student.status}
                </td>
                <td className="px-6 py-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(student)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleAccept(student.email)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-700 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(student.email)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
