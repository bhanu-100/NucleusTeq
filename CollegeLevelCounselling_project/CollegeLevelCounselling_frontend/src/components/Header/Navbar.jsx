import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router"; 
import logo from "../../assets/clclogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setRole(user.role);
    }
  }, []); 
  
  const handleLogout = () => {
    localStorage.clear();
    setRole(""); // Reset role after logout
    navigate("/signIn"); // Redirect to sign-in page
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="CLC Portal" className="h-12 w-auto rounded-lg" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            <NavItem to="/" text="Home" />
            {role === "" && (
              <>
                <NavItem to="/signIn" text="Sign In" />
                <NavItem to="/signUp" text="Sign Up" />
              </>
            )}
            {role === "admin" && (
              <>
                <NavItem to="/admin" text="Admin" />
                <button onClick={handleLogout} className="text-gray-300 hover:text-red-500">
                  Log Out
                </button>
              </>
            )}
            {role === "student" && (
              <>
                <NavItem to="/studentRegistration" text="Student Registration" />
                <NavItem to="/studentStatus" text="Student Status" />
                <button onClick={handleLogout} className="text-gray-300 hover:text-red-500">
                  Log Out
                </button>
              </>
            )}
            {role === "admissionOfficer" && (
              <>
                <NavItem to="/admissionOfficer" text="Admission Officer" />
                <button onClick={handleLogout} className="text-gray-300 hover:text-red-500">
                  Log Out
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-gray-300 hover:text-white transition-transform transform duration-200 ease-in-out"
          >
            {isOpen ? (
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 bg-gray-900 p-4 rounded-md space-y-2">
            <NavItem to="/" text="Home" mobile />
            {role === "" && (
              <>
                <NavItem to="/signIn" text="Sign In" mobile />
                <NavItem to="/signUp" text="Sign Up" mobile />
              </>
            )}
            {role === "admin" && (
              <>
                <NavItem to="/admin" text="Admin" mobile />
                <button onClick={handleLogout} className="text-red-400 hover:text-white">
                  Log Out
                </button>
              </>
            )}
            {role === "student" && (
              <>
                <NavItem to="/studentRegistration" text="Student Registration" mobile />
                <NavItem to="/studentStatus" text="Student Status" mobile />
                <button onClick={handleLogout} className="text-red-400 hover:text-white">
                  Log Out
                </button>
              </>
            )}
            {role === "admissionOfficer" && (
              <>
                <NavItem to="/admissionOfficer" text="Admission Officer" mobile />
                <button onClick={handleLogout} className="text-red-400 hover:text-white">
                  Log Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

//  Reusable Nav Item Component with Smooth Hover Effects
const NavItem = ({ to, text, mobile }) => {
  return (
    <Link
      to={to}
      className={`block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${
        mobile
          ? "text-gray-300 hover:bg-gray-700 hover:text-white"
          : "text-gray-300 hover:text-white hover:underline underline-offset-4"
      }`}
    >
      {text}
    </Link>
  );
};

export default Navbar;
