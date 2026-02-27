import React from "react";
import "../../styles/form.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="bg-orbs"></div>

      <div className="glass-card">
        <div className="mac-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <h1 className="title">Velix</h1>
        <p className="subtitle">Welcome back</p>

        <form className="auth-form">
          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>

        <p className="switch-text">
          Don’t have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;