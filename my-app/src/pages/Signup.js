import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Password strength indicator
    if (name === "password") {
      if (value.length < 6) setPasswordStrength("Weak");
      else if (value.match(/[a-zA-Z]/) && value.match(/[0-9]/))
        setPasswordStrength("Strong");
      else setPasswordStrength("Moderate");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    // Validation
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // API Call
    try {
      const response = await axios.post(
        "http://localhost:5000/api/sign/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );
      setSuccessMessage(response.data.message);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setPasswordStrength("");
    } catch (error) {
      setErrors({
        apiError:
          error.response?.data?.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)",
        color: "#fff",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "28rem",
          backgroundColor: "#ffffffcc",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#8dc26f" }}>
          Create an Account
        </h2>
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        {errors.apiError && (
          <div className="alert alert-danger" role="alert">
            {errors.apiError}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className={`form-control ${
                errors.username ? "is-invalid" : ""
              }`}
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            <small className="text-muted">
              Password Strength:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color:
                    passwordStrength === "Strong"
                      ? "green"
                      : passwordStrength === "Moderate"
                      ? "orange"
                      : "red",
                }}
              >
                {passwordStrength}
              </span>
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Re-enter Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#8dc26f",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <p style={{ color: "#76b852" }}>
            Already have an account?{" "}
            <Link to="/signin" style={{ color: "#8dc26f" }}>
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
