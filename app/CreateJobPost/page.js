'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addJob } from '../../data/jobs';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaFileAlt } from 'react-icons/fa';

export default function CreateJobPost() {
  const router = useRouter();
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(jobData);
    router.push('/JobPostings');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Create Job Post</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Job Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Senior Software Engineer"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
            <div className="relative">
              <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="company"
                name="company"
                value={jobData.company}
                onChange={handleChange}
                required
                className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="location"
                name="location"
                value={jobData.location}
                onChange={handleChange}
                required
                className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. San Francisco, CA"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Job Type</label>
            <div className="relative">
              <FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                id="type"
                name="type"
                value={jobData.type}
                onChange={handleChange}
                required
                className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Job Description</label>
            <div className="relative">
              <FaFileAlt className="absolute left-3 top-3 text-gray-400" />
              <textarea
                id="description"
                name="description"
                value={jobData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the job role, responsibilities, and requirements..."
              ></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
              Create Job Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}