import React from "react";
import { useState } from "react";
import FetchApi from "../../api/Fetch";
import { useLocation, useNavigate } from "react-router";

const EditStudentDetails = () => {
  const location = useLocation();  // ✅ Get student data from navigation
  const navigate = useNavigate();
  const student = location.state?.student || {}; // ✅ Handle missing data safely

  const [fullName, setFullName] = useState(student.fullName || "");
  const [rollno, setRollno] = useState(student.rollno || "");
  const [rank, setRank] = useState(student.rank || "");
  const [email, setEmail] = useState(student.email || "");
  const [phoneno, setPhoneno] = useState(student.phoneno || "");
  const [address, setAddress] = useState(student.address || "");
  const [fatherName, setFatherName] = useState(student.fatherName || "");
  const [date, setDate] = useState(student.date || "");
  const [status, setStatus] = useState(student.status || "");
  const [gender, setGender] = useState(student.gender || "");
  const [category, setCategory] = useState(student.category || "");
  const [branch, setBranch] = useState(student.branch || "");

  
    async function handleSubmit() {
      const data = {fullName,gender,category,branch,rollno,rank,email,phoneno,address,fatherName,date,status};
      let res = await FetchApi(data,"editStudentDetails") 
      console.log(data)
      console.log(res);
      alert("student details changed succesfully !")
   }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-6">
          ✏️ Edit Student Details
        </h2>

        <div className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Student Name</label>
            <input
              type="text"
              value={fullName} 
              onChange={(e)=>setFullName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter student name"
              required
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Father’s Name</label>
            <input
              type="text"
              value={fatherName}
              onChange={(e)=>setFatherName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter father’s name"
              required
            />
          </div>

          {/* Roll Number & Rank */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Roll Number</label>
              <input
                type="text"
                value={rollno} 
                onChange={(e)=>setRollno(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter roll number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Rank</label>
              <input
                type="text"
                value={rank} 
                onChange={(e)=>setRank(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter rank"
                required
              />
            </div>
          </div>

          {/* Gender & Category */}
          {/* Gender */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
            <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="male">Male</option>
            <option value="female">Female </option>
            <option value="other">Other</option>
          </select>
            
          </div>

          {/* Branch */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Branch</label>
            <select
              id="branch"
              onChange={(e)=>{setBranch(e.target.value)}}
              className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
            >
              <option value={"Computer Engineering"}>Computer Engineering</option>
              <option value={"Civil Engineering"}>Civil Engineering</option>
              <option value={"Electrical Engineering"}>Electrical Engineering</option>
              <option value={"Mechanical Engineering"}>Mechanical Engineering</option>
            </select>
          </div>

          {/* Category*/}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="gen">GEN</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>

          </select>
              
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Email</label>
              <input
                type="email"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter email"
                required
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                value={phoneno} 
                onChange={(e)=>setPhoneno(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Address</label>
            <textarea
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter address"
              value={address} 
              onChange={(e)=>setAddress(e.target.value)}
              required
            ></textarea>
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Date of Birth (DOB)</label>
            <input
              type="date"
              value={date} onChange={(e)=>setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Status</label>
            <select onChange={(e)=>setStatus(e.target.value)} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="Admitted">Admitted</option>
              <option value="Waiting">Waiting</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStudentDetails;
