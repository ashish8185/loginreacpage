import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../style/LoginPage.css";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    fetch("http://localhost:5001/login")
      .then((res) => res.json())
      .then((resp) => {
        let user = resp.find((v) => v.username === username);
        if (!user) {
          alert("Invalid username");
        } else if (user.password !== password) {
          alert("Invalid password");
        } else {
          alert("Login successful");
          navigate('/uploadimage'); // Navigate to upload image page
        }
      });
  };

  return (
    <div className="login-container">
      <h1>login form</h1>
      <form onSubmit={Login}>
        <div>
          
          <input type="text" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <div>
          
          <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn">Login</button>
        <Link to='/adduser' className="btn1">Signup</Link>
      </form>
    </div>
  );
};

export default LoginPage;
