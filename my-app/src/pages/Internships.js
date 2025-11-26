import React, { useState } from 'react';
import './home.css';
import image1 from '../image/i1.jpg';
import image2 from '../image/i2.png';
import image3 from '../image/i3.png';
import image4 from '../image/i4.png';
import image5 from '../image/i5.jpg';
import image6 from '../image/i6.jpg';
import image7 from '../image/i7.png';
import image8 from '../image/i8.jpg';

const Internships = () => {
  const internshipListings = [
    {
      title: 'Frontend Intern',
      company: 'TechCorp',
      location: 'Bengaluru, Karnataka',
      description: 'Assist in developing web applications using React.js.',
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      postedDate: '2024-12-01',
      role: 'Frontend Intern',
      logo: image1,
    },
    {
      title: 'Backend Intern',
      company: 'CodeBase',
      location: 'Hyderabad, Telangana',
      description: 'Work on backend development using Node.js and Express.',
      skills: ['Node.js', 'Express', 'MongoDB'],
      postedDate: '2024-11-27',
      role: 'Backend Intern',
      logo: image2,
    },
    {
      title: 'Data Science Intern',
      company: 'DataMind',
      location: 'Mumbai, Maharashtra',
      description: 'Help in data analysis and modeling using Python and machine learning.',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      postedDate: '2024-12-02',
      role: 'Data Science Intern',
      logo: image3,
    },
    {
      title: 'Mobile App Developer Intern',
      company: 'AppFusion',
      location: 'Pune, Maharashtra',
      description: 'Develop mobile applications using React Native.',
      skills: ['React Native', 'JavaScript', 'Mobile Development'],
      postedDate: '2024-12-03',
      role: 'Mobile App Developer Intern',
      logo: image4,
    },
    {
      title: 'UI/UX Intern',
      company: 'DesignFlow',
      location: 'Chennai, Tamil Nadu',
      description: 'Assist in designing user interfaces and experiences for web applications.',
      skills: ['UI Design', 'UX Research', 'Figma'],
      postedDate: '2024-11-30',
      role: 'UI/UX Intern',
      logo: image5,
    },
    {
      title: 'Software Engineer Intern',
      company: 'CodeLabs',
      location: 'Delhi, India',
      description: 'Work on full-stack development with Angular and Node.js.',
      skills: ['Angular', 'Node.js', 'MongoDB'],
      postedDate: '2024-11-29',
      role: 'Software Engineer Intern',
      logo: image6,
    },
    {
      title: 'Digital Marketing Intern',
      company: 'MarketX',
      location: 'Noida, Uttar Pradesh',
      description: 'Assist in social media campaigns and content creation.',
      skills: ['Digital Marketing', 'SEO', 'Content Creation'],
      postedDate: '2024-12-05',
      role: 'Digital Marketing Intern',
      logo: image7,
    },
    {
      title: 'Graphics Design Intern',
      company: 'CreativeHub',
      location: 'Bengaluru, Karnataka',
      description: 'Design graphics and visuals for marketing and branding.',
      skills: ['Graphic Design', 'Photoshop', 'Illustrator'],
      postedDate: '2024-12-01',
      role: 'Graphics Design Intern',
      logo: image8,
    },
  ];

  const [selectedRole, setSelectedRole] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [resume, setResume] = useState(null);

  const filteredInternships =
    selectedRole === 'All'
      ? internshipListings
      : internshipListings.filter((internship) => internship.role === selectedRole);

  const handleApplyClick = (internship) => {
    setSelectedInternship(internship);
    setShowModal(true);
  };

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmitApplication = () => {
    if (resume) {
      alert(`Your resume has been submitted for the position: ${selectedInternship.title}`);
      setShowModal(false);
      setResume(null);
    } else {
      alert('Please upload a resume before submitting.');
    }
  };

  return (
    <div className="container py-5">
      <h1>Internship Listings</h1>
      <div className="mb-4">
        <label htmlFor="roleFilter" className="form-label">
          Filter by Role
        </label>
        <select
          id="roleFilter"
          className="form-select"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="All">All Roles</option>
          {Array.from(new Set(internshipListings.map((internship) => internship.role))).map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        {filteredInternships.map((internship, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm mb-4">
              <img
                src={internship.logo}
                className="card-img-top constant-image-size"
                alt={`${internship.company} logo`}
              />
              <div className="card-body">
                <h5 className="card-title">{internship.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{internship.company}</h6>
                <p className="card-text">
                  <strong>Location:</strong> {internship.location}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {internship.description}
                </p>
                <p className="card-text">
                  <strong>Required Skills:</strong> {internship.skills.join(', ')}
                </p>
                <p className="card-text">
                  <small className="text-muted">Posted on: {internship.postedDate}</small>
                </p>
                <button className="btn btn-primary" onClick={() => handleApplyClick(internship)}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Apply for {selectedInternship?.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Please upload your resume for this internship.</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmitApplication}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;
