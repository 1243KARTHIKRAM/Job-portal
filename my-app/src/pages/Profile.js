import React from 'react';
import profile from '../image/profile.webp'

const Profile = () => {
  // Sample user profile data
  const userProfile = {
    name: 'ABCD',
    email: 'ABCD1243@gmail.com',
    role: 'Job Seeker',
    gender: 'Female',
    phoneNo: '123456789',
    profilePhoto: profile, // Use a placeholder image or an actual photo URL
  };

  return (
    <div className="container py-5">
      <h1>Profile</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center mb-4">
            {/* Profile Photo */}
            <img
              src={userProfile.profilePhoto}
              alt="Profile"
              className="rounded-circle me-4"
              style={{ width: '150px', height: '150px' }}
            />
            <div>
              <h5 className="card-title">{userProfile.name}</h5>
              <p className="card-text"><strong>Email:</strong> {userProfile.email}</p>
              <p className="card-text"><strong>Role:</strong> {userProfile.role}</p>
              <p className="card-text"><strong>Gender:</strong> {userProfile.gender}</p>
              <p className="card-text"><strong>Phone No:</strong> {userProfile.phoneNo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
