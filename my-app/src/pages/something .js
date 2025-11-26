import React, { useState } from 'react';

const Jobs = () => {
  // Sample job data with Indian locations
  const jobListings = [
    { title: 'Frontend Developer', company: 'TechCorp', location: 'Bengaluru, Karnataka', description: 'Develop and maintain the frontend of web applications using React.js.', skills: ['React.js', 'JavaScript', 'HTML', 'CSS'], postedDate: '2024-12-01', role: 'Frontend Developer', logo: 'https://via.placeholder.com/150' },
    { title: 'Backend Developer', company: 'CodeBase', location: 'Hyderabad, Telangana', description: 'Work on building and maintaining server-side applications and APIs.', skills: ['Node.js', 'Express', 'MongoDB'], postedDate: '2024-11-25', role: 'Backend Developer', logo: 'https://via.placeholder.com/150' },
    { title: 'Data Analyst', company: 'DataMind', location: 'Mumbai, Maharashtra', description: 'Analyze large datasets and provide actionable insights using SQL and Python.', skills: ['SQL', 'Python', 'Data Visualization'], postedDate: '2024-12-03', role: 'Data Analyst', logo: 'https://via.placeholder.com/150' },
    { title: 'Full Stack Developer', company: 'InnovateTech', location: 'Delhi, Delhi', description: 'Work on both frontend and backend development.', skills: ['React.js', 'Node.js', 'MongoDB'], postedDate: '2024-12-01', role: 'Full Stack Developer', logo: 'https://via.placeholder.com/150' },
    { title: 'DevOps Engineer', company: 'CloudNet', location: 'Chennai, Tamil Nadu', description: 'Manage CI/CD pipelines and cloud infrastructure.', skills: ['AWS', 'Docker', 'Kubernetes'], postedDate: '2024-11-28', role: 'DevOps Engineer', logo: 'https://via.placeholder.com/150' },
    { title: 'UI/UX Designer', company: 'Creative Minds', location: 'Pune, Maharashtra', description: 'Design intuitive user interfaces and experiences.', skills: ['Figma', 'Adobe XD', 'CSS'], postedDate: '2024-12-02', role: 'UI/UX Designer', logo: 'https://via.placeholder.com/150' },
    { title: 'Mobile App Developer', company: 'AppWorld', location: 'Kolkata, West Bengal', description: 'Develop mobile applications using Flutter.', skills: ['Flutter', 'Dart'], postedDate: '2024-12-01', role: 'Mobile App Developer', logo: 'https://via.placeholder.com/150' },
    { title: 'Machine Learning Engineer', company: 'AI Pioneers', location: 'Bengaluru, Karnataka', description: 'Develop and optimize ML models.', skills: ['Python', 'TensorFlow', 'Pandas'], postedDate: '2024-11-30', role: 'Machine Learning Engineer', logo: 'https://via.placeholder.com/150' },
    { title: 'Cybersecurity Analyst', company: 'SecureX', location: 'Mumbai, Maharashtra', description: 'Ensure the safety and security of systems.', skills: ['Kali Linux', 'Penetration Testing'], postedDate: '2024-11-29', role: 'Cybersecurity Analyst', logo: 'https://via.placeholder.com/150' },
    { title: 'Blockchain Developer', company: 'ChainLink', location: 'Ahmedabad, Gujarat', description: 'Develop blockchain-based solutions.', skills: ['Solidity', 'Ethereum'], postedDate: '2024-12-02', role: 'Blockchain Developer', logo: 'https://via.placeholder.com/150' },
    { title: 'Database Administrator', company: 'DataVault', location: 'Chennai, Tamil Nadu', description: 'Manage and optimize databases.', skills: ['SQL', 'MySQL', 'MongoDB'], postedDate: '2024-11-28', role: 'Database Administrator', logo: 'https://via.placeholder.com/150' },
    { title: 'Game Developer', company: 'Pixel Studios', location: 'Hyderabad, Telangana', description: 'Develop and optimize game engines.', skills: ['Unity', 'C#', '3D Modeling'], postedDate: '2024-12-01', role: 'Game Developer', logo: 'https://via.placeholder.com/150' },
    { title: 'Data Scientist', company: 'BigData Inc.', location: 'Delhi, Delhi', description: 'Analyze and interpret complex datasets.', skills: ['Python', 'SQL', 'Data Mining'], postedDate: '2024-12-03', role: 'Data Scientist', logo: 'https://via.placeholder.com/150' },
    { title: 'Network Engineer', company: 'NetCore', location: 'Pune, Maharashtra', description: 'Manage and secure networks.', skills: ['Cisco', 'Networking'], postedDate: '2024-12-02', role: 'Network Engineer', logo: 'https://via.placeholder.com/150' },
    { title: 'Quality Assurance Engineer', company: 'TestHub', location: 'Noida, Uttar Pradesh', description: 'Ensure software quality and performance.', skills: ['Testing', 'Selenium'], postedDate: '2024-11-30', role: 'QA Engineer', logo: 'https://via.placeholder.com/150' },
  ];

  // State to manage the selected role for filtering
  const [selectedRole, setSelectedRole] = useState('All');

  // Filter jobs based on the selected role
  const filteredJobs = selectedRole === 'All' 
    ? jobListings 
    : jobListings.filter(job => job.role === selectedRole);

  // Handle resume upload
  const handleApplyClick = (jobTitle) => {
    alert(`Upload your resume for the position: ${jobTitle}`);
  };

  return (
    <div className="container py-5">
      <h1>Job Listings</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="roleFilter" className="form-label">Filter by Role</label>
        <select
          id="roleFilter"
          className="form-select"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="All">All Roles</option>
          {Array.from(new Set(jobListings.map((job) => job.role))).map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Displaying Job Listings */}
      <div className="row">
        {filteredJobs.map((job, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm mb-4">
              <img src={job.logo} className="card-img-top" alt={`${job.company} logo`} />
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                <p className="card-text"><strong>Description:</strong> {job.description}</p>
                <p className="card-text"><strong>Required Skills:</strong> {job.skills.join(', ')}</p>
                <p className="card-text"><small className="text-muted">Posted on: {job.postedDate}</small></p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleApplyClick(job.title)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
