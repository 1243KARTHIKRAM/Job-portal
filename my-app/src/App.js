import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Jobs from './pages/Jobs';
import Internships from './pages/Internships';
import Profile from './pages/Profile';
import Post from './pages/Post';

const App = () => {
  const [jobs, setJobs] = useState([]); // State for jobs
  const [internships, setInternships] = useState([]); // State for internships

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs jobs={jobs} />} /> {/* Pass jobs as prop */}
        <Route path="/internships" element={<Internships internships={internships} />} /> {/* Pass internships as prop */}
        <Route path="/profile" element={<Profile />} />
        <Route 
          path="/post" 
          element={<Post setJobs={setJobs} setInternships={setInternships} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
