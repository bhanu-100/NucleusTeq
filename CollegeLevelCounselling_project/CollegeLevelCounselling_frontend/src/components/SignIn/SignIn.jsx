import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import FetchApi from "../../api/Fetch";


function SignIn() {
  const navigate = useNavigate(); 
  const [role, setRole] = useState("student");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  
  const SignInHandler = async () => {
    const data={role,email,password};
    const res = await FetchApi(data,"signIn");
    if(res.success==="true"){
      localStorage.clear();
      localStorage.setItem("user",JSON.stringify(res));
      navigate("/");
      window.location.reload();
    }
    else{
      alert(res.error)
    }
    console.log(data)
    console.log(res)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
          🔑 Sign In to Your Account
        </h5>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="student">Student</option>
            <option value="admissionOfficer">Admission Officer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            📧 Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="name@domain.com"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            🔒 Your Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="••••••••"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center mb-4">
          <Link to="/Forgot" className="text-sm text-blue-700 hover:underline dark:text-blue-400">
            Forgot Password?
          </Link>
        </div>

        {/* SignIn Button */}
        <button onClick={SignInHandler} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
          Sign In
        </button>

        {/* Register Link */}
        <div className="text-sm text-center text-gray-500 dark:text-gray-300 mt-4">
          Not registered?{" "}
          <Link to="/studentRegistration" className="text-blue-700 hover:underline dark:text-blue-400">
            Student Registration
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
