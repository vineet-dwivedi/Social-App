import React from "react";
import "../../styles/form.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {handleLogin} = useAuth()

  async function handle(e){
     e.preventDefault();

     try {
       await handleLogin(username,password);
       navigate("/");
     } catch (err) {
       console.log(err?.response?.data?.message || "Login failed");
     }
  }

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

        <form onSubmit={handle}className="auth-form">
          <div className="input-group">
            <input onChange={(e)=>{setUsername(e.target.value)}}type="text" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input onChange={(e)=>{setPassword(e.target.value)}}type="password" required />
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
