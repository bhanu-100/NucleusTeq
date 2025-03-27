import React from "react";
import { useState } from "react";
import FetchApi from "../../api/Fetch";

const Forgot = () => {
  const [email, setEmail] = useState("")
  async function handleSubmit(e) {
      e.preventDefault();
      const data = {email};
      let res=await FetchApi(data,"forgot")
      if(res.success==="false"){
        alert(res.error)
      }
      console.log(data)
      console.log(res);
      alert("Forgot Successful!");
  }
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white mb-4">
          Forgot Password?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Enter your email to receive a password on your mail.
        </p>

        {/* Form */}
        <form method="POST" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
