//  app/components/Hero.jsx
"use client"

import React from 'react';
import Link from 'next/link';
import { FaSearch, FaPlus } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 text-white py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-blue-400">Recruiters Portal</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
          Streamline your recruitment process with our advanced platform. Manage applications efficiently and stay ahead in the tech industry.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href='/JobPostings' className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            <FaSearch className="mr-2" />
            View Job Postings
          </Link>
          <Link href='/CreateJobPost' className="inline-flex items-center justify-center bg-white text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            <FaPlus className="mr-2" />
            Create Job Post
          </Link>
        </div>
      </div>
    </div>
  );
}