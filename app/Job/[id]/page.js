// app/job/[id]/page.js
'use client';

import { useParams, useRouter } from 'next/navigation';
import { jobPostingsData } from '../../../data/jobs';

export default function JobDetails() {
  const { id } = useParams();
  const router = useRouter();
  const job = jobPostingsData[id];

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-100 mb-4">Job Not Found</h1>
          <p className="text-lg text-gray-400 mb-8">Sorry, we could not find the job you are looking for.</p>
          <button
            onClick={() => router.push('/JobPostings')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300"
          >
            Back to Job Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-gray-800 shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4 bg-blue-600 text-white">
          <h1 className="text-2xl font-semibold">{job.title}</h1>
          <p className="text-lg">{job.company}</p>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <p className="text-gray-300"><span className="font-medium">Location:</span> {job.location}</p>
            <p className="text-gray-300"><span className="font-medium">Type:</span> {job.type}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Job Description</h2>
            <p className="text-gray-300">{job.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Applicants</h2>
            <ul className="space-y-2">
              {job.applicants.map((applicant, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded-md shadow-sm">
                  <p className="text-base font-medium text-gray-100">{applicant.name}</p>
                  <p className="text-gray-400 text-sm">Applied on: {applicant.appliedOn}</p>
                </li>
              ))}
            </ul>

            {job.applicants.length === 0 && (
              <p className="text-gray-400 mt-2">No applicants yet.</p>
            )}
          </div>
        </div>
        <div className="px-6 py-3 bg-gray-700 border-t border-gray-600">
          <button
            onClick={() => router.push('/JobPostings')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300"
          >
            Back to Job Listings
          </button>
        </div>
      </div>
    </div>
  );
}
