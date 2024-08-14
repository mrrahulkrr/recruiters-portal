'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { jobPostingsData, deleteJob, updateJob } from '../../data/jobs';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

export default function JobPostings() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [editingJob, setEditingJob] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setJobs(Object.entries(jobPostingsData).map(([id, job]) => ({ id, ...job })));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleJobClick = (id) => {
    router.push(`/Job/${id}`);
  };

  const handleDelete = (id) => {
    deleteJob(id);
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateJob(editingJob.id, editingJob);
    setJobs(jobs.map(job => job.id === editingJob.id ? editingJob : job));
    setEditingJob(null);
  };

  const handleEditChange = (e) => {
    setEditingJob({ ...editingJob, [e.target.name]: e.target.value });
  };

  const filteredJobPostings = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === '' || job.type === selectedType)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Job Postings</h1>

        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <select
            value={selectedType}
            onChange={handleFilterChange}
            className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobPostings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.company} - {job.location}</p>
                <p className="text-gray-600 mb-4"><span className="font-medium">Type:</span> {job.type}</p>
                <div className="flex justify-between items-center">
                  <button onClick={() => handleJobClick(job.id)} className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
                    <FaEye className="mr-2" /> View Details
                  </button>
                  <div className="space-x-2">
                    <button onClick={() => handleEdit(job)} className="text-yellow-600 hover:text-yellow-800 transition duration-300">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(job.id)} className="text-red-600 hover:text-red-800 transition duration-300">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobPostings.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No job postings found matching your criteria.
          </div>
        )}

        {editingJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Edit Job</h2>
              <form onSubmit={handleUpdate} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={editingJob.title}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  name="company"
                  value={editingJob.company}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Company"
                />
                <input
                  type="text"
                  name="location"
                  value={editingJob.location}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Location"
                />
                <select
                  name="type"
                  value={editingJob.type}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
                <textarea
                  name="description"
                  value={editingJob.description}
                  onChange={handleEditChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Job Description"
                  rows="4"
                ></textarea>
                <div className="flex justify-end space-x-2">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Save
                  </button>
                  <button type="button" onClick={() => setEditingJob(null)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}