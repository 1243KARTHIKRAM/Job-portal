import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/sign/signin`,
      formData
    );

    alert(response.data.message);
    navigate("/home");
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("An error occurred. Please try again later.");
    }
  }

  setFormData({ email: "", password: "" });
};


  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "30rem",
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.05)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#3f5efb" }}>
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ fontWeight: "500", color: "#333" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ fontWeight: "500", color: "#333" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#fc466b",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              padding: "12px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p style={{ color: "#3f5efb", fontSize: "14px" }}>
            New user? <a href="/signup" style={{ color: "#fc466b", textDecoration: "underline" }}>Create an account</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
