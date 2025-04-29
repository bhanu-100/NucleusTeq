import React, { useEffect } from 'react';
import { useState } from "react";
import FetchApi from "../../api/Fetch";
import { useNavigate } from 'react-router';

function StudentRegistration() {

  const navigate = useNavigate();
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("Student")
  const [gender, setGender] = useState("male")
  const [category, setCategory] = useState("gen")
  const [branch, setBranch] = useState("Computer Engineering")
  const [status, setStatus] = useState("pending")
  const [rollno,setRollno] = useState("")
  const [rank,setRank] = useState("")
  const [email,setEmail] = useState("")
  const [phoneno,setPhoneno] = useState("")
  const [address,setAddress] = useState("")
  const [fatherName,setFatherName] = useState("")
  const [date,setDate] = useState("")

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("user"));
  if(data){
    setEmail(data.email);
  }
}, [])

   
  async function handleSubmit() {
     const data = {fullName,password,gender,category,role,branch,status,rollno,rank,email,phoneno,address,fatherName,date};
     let res = await FetchApi(data,"studentRegistration") 
     console.log(data)
     console.log(res)
     navigate("/studentStatus")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 text-center mb-6">
          🎓 Student Registration
        </h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
            <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
          </div>

          {/* Roll Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Roll Number</label>
            <input value={rollno} onChange={(e)=>setRollno(e.target.value)} type="text" placeholder="Enter your roll number"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
          </div>
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@domain.com"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" readOnly />
          </div>
          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>   
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
          </div>

          {/* Rank */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Rank</label>
           <input value={rank} onChange={(e)=>setRank(parseInt(e.target.value))} type="text" placeholder="Enter your rank"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
          </div>

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
              <option value={"Mining Engineering"}>Mining Engineering</option>
              <option value={"Chemical Engineering"}>Chemical Engineering</option>
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

          
          {/* Phone Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
            <input value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} type="tel" placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
            <textarea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your address"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"></textarea>
          </div>

          {/* Father's Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Father’s Name</label>
            <input value={fatherName} onChange={(e)=>setFatherName(e.target.value)} type="text" placeholder="Enter father's name"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Birth</label>
            <input value={date} onChange={(e)=>setDate(e.target.value)} type="date"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
          </div>

          {/* Submit Button */}
          <button onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all dark:bg-blue-500 dark:hover:bg-blue-600">
            ✅ Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;
