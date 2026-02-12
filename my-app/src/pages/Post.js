import React, { useState } from "react";
import axios from "axios"; // Import Axios for API calls
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Post = ({ setJobs, setInternships }) => {
  const [postType, setPostType] = useState("job");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  const postData = {
    title,
    company,
    location,
    description,
    skills: skills.split(",").map(skill => skill.trim()),
    role: postType === "job" ? "Job" : "Internship",
  };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/posts/create`,
      postData
    );

    if (response.status === 201) {
      alert("Post created successfully!");

      if (postType === "job") {
        setJobs((prevJobs) => [...prevJobs, response.data.post]);
      } else {
        setInternships((prevInternships) => [...prevInternships, response.data.post]);
      }

      setTitle("");
      setCompany("");
      setLocation("");
      setDescription("");
      setSkills("");
    }
  } catch (error) {
    setError("Error posting data. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "40rem", borderRadius: "15px", background: "#ffffffcc", color: "#333" }}>
        <h3 className="text-center mb-4" style={{ color: "#6a11cb" }}>
          Post a {postType === "job" ? "Job" : "Internship"}
        </h3>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="postType" className="form-label">Post Type</label>
            <select
              id="postType"
              className="form-select shadow-sm"
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
              style={{ borderColor: "#6a11cb" }}
            >
              <option value="job">Job</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter job or internship title"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control shadow-sm"
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the job or internship role"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">Skills (comma separated)</label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., React, Node.js, Python"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 shadow-sm"
            style={{
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              color: "#fff",
              border: "none",
            }}
            disabled={loading}
          >
            {loading ? "Posting..." : `Post ${postType === "job" ? "Job" : "Internship"}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
