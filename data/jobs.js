// data/jobs.js

export const jobPostingsData = {
    1: {
      title: 'Frontend Developer',
      company: 'AGH',
      location: 'San Francisco',
      type: 'Full-time',
      description: 'We are looking for a Frontend Developer with expertise in React and Tailwind CSS...',
      applicants: [
        {
          name: 'Alice Johnson',
          appliedOn: '2024-08-01',
          resumeLink: 'https://example.com/resume/alice-johnson',
          email: 'alice.johnson@example.com',
          phone: '123-456-7890',
          skills: ['React', 'Tailwind CSS', 'JavaScript']
        },
        {
          name: 'Bob Smith',
          appliedOn: '2024-08-02',
          resumeLink: 'https://example.com/resume/bob-smith',
          email: 'bob.smith@example.com',
          phone: '987-654-3210',
          skills: ['React', 'TypeScript', 'CSS']
        },
      ],
    },
    2: {
      title: 'Backend Developer',
      company: 'AGH',
      location: 'New York',
      type: 'Part-time',
      description: 'Join our backend team to work with Node.js and MongoDB...',
      applicants: [
        {
          name: 'Charlie Brown',
          appliedOn: '2024-08-03',
          resumeLink: 'https://example.com/resume/charlie-brown',
          email: 'charlie.brown@example.com',
          phone: '555-123-4567',
          skills: ['Node.js', 'MongoDB', 'Express']
        },
        {
          name: 'David Wilson',
          appliedOn: '2024-08-04',
          resumeLink: 'https://example.com/resume/david-wilson',
          email: 'david.wilson@example.com',
          phone: '555-987-6543',
          skills: ['Node.js', 'JavaScript', 'APIs']
        },
      ],
    },
    3: {
      title: 'DevOps Engineer',
      company: 'AGH',
      location: 'New York',
      type: 'Part-time',
      description: 'Join our team to manage infrastructure and deployment...',
      applicants: [
        {
          name: 'Emma Davis',
          appliedOn: '2024-08-05',
          resumeLink: 'https://example.com/resume/emma-davis',
          email: 'emma.davis@example.com',
          phone: '555-321-7654',
          skills: ['Docker', 'Kubernetes', 'AWS']
        },
      ],
    },
    4: {
      title: 'Full Stack Developer',
      company: 'AGH',
      location: 'New York',
      type: 'Part-time',
      description: 'Work on both front-end and back-end technologies...',
      applicants: [
        {
          name: 'Lucas Martin',
          appliedOn: '2024-08-06',
          resumeLink: 'https://example.com/resume/lucas-martin',
          email: 'lucas.martin@example.com',
          phone: '555-654-3210',
          skills: ['React', 'Node.js', 'Python']
        },
        {
          name: 'Sophia Lee',
          appliedOn: '2024-08-07',
          resumeLink: 'https://example.com/resume/sophia-lee',
          email: 'sophia.lee@example.com',
          phone: '555-789-1234',
          skills: ['JavaScript', 'Django', 'MySQL']
        },
      ],
    },
    5: {
      title: 'Data Engineer',
      company: 'AGH',
      location: 'New York',
      type: 'Part-time',
      description: 'Handle data pipelines and database management...',
      applicants: [
        {
          name: 'Olivia Brown',
          appliedOn: '2024-08-08',
          resumeLink: 'https://example.com/resume/olivia-brown',
          email: 'olivia.brown@example.com',
          phone: '555-456-7890',
          skills: ['SQL', 'Python', 'ETL']
        },
      ],
    },
    // ... add more job postings as needed
  };


export function addJob(job) {
  const newJobId = Object.keys(jobPostingsData).length + 1;
  jobPostingsData[newJobId] = {
    ...job,
    applicants: [],
  };
  return newJobId;
}

export function deleteJob(id) {
  delete jobPostingsData[id];
}

export function updateJob(id, updatedJob) {
  jobPostingsData[id] = {
    ...jobPostingsData[id],
    ...updatedJob,
  };
}