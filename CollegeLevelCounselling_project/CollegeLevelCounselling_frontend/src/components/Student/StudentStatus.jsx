import React, { useEffect, useState } from "react";
import Fetch from "../../api/Fetch";

const StudentStatus = () => {
  const [student, setStudent] = useState({}); // Initialize as an empty object

  useEffect(() => {
    async function fetchData() {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        console.log("No user data found in localStorage");
        return;
      }

      const data = JSON.parse(storedUser);
      console.log("Stored User Data:", data);

      try {
        let response = await Fetch(data, "studentStatus");
        setStudent(response || {}); // Ensure it's an object
        console.log("API Response:", response);
      } catch (error) {
        console.error("Error fetching student status:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 text-center mb-6">
          📊 Student Status
        </h2>
        {Object.keys(student).length > 0 ? (
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>Name:</strong> {student.fullName || "N/A"}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>Rank:</strong> {student.rank || "N/A"}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>Branch:</strong> {student.branch || "N/A"}
            </p>
            <p
              className={`text-lg font-semibold ${
                student.status === "Admitted"
                  ? "text-green-600 dark:text-green-400"
                  : "text-yellow-600 dark:text-yellow-400"
              }`}
            >
              <strong>Status:</strong> {student.status || "N/A"}
            </p>
          </div>
        ) : (
          <span className="text-red-500 font-semibold">⚠️ Please register first</span>
        )}
      </div>
    </div>
  );
};

export default StudentStatus;
