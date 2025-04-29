import React, { useState } from "react";
import FetchApi from "../../api/Fetch"
import { Link, useNavigate } from "react-router";

const AddadmissionOfficer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role:"admissionOfficer",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation & Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.email.includes("@")) validationErrors.email = "Invalid email.";
    if (formData.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let response = await FetchApi(formData,"addAdmissionOfficer")
      console.log(formData);
      console.log(response)
      alert("Admission Officer added successfully!")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-4">
          🔐 Add AdmissionOfficer
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
       
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${
                errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Add AdmissionOfficer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddadmissionOfficer;
