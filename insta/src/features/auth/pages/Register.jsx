import React from "react";
import { Link } from "react-router-dom";
import "../../styles/register.scss";
import axios from 'axios';
import { useState } from "react";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handle(e){
    e.preventDefault();
  }

  return (
    <div className="register-page">
      <div className="bg-orbs"></div>

      <div className="glass-card">
        <div className="mac-dots">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <h1 className="title">Velix</h1>
        <p className="subtitle">Create your account</p>

        <form onSubmit={handle}className="register-form">
          <div className="input-group">
            <input onChange={(e)=>{setUsername(e.target.value)}} type="text" required />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" required />
            <label>Password</label>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <div className="footer-text">
          Already have an account? <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;