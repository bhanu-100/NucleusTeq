import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-sm dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} <Link to="/" className="font-semibold text-blue-600 hover:underline">CLC Portal</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-2 md:mt-0 space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Privacy Policy</Link>
          <Link to="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
