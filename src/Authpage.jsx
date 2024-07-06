import React, { useState } from 'react';
import "./Auth.css";
import { useNavigate } from 'react-router-dom';
import logo from "./amuze logo.png";
import "./App.css"

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const url = isLogin ? 'http://localhost:8080/api/login' : 'http://localhost:8080/api/register';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          // Navigate after a short delay to show the preloader
          setTimeout(() => {
            setIsLoading(false);
            navigate("/search");
          }, 2000);
        } else {
          setIsLoading(false);
          alert('Account created successfully! Please Login!');
          setIsLogin(true);
        }
      } else {
        setIsLoading(false);
        alert(data.message || 'An error occurred');
      }
    } catch (error) {
      setIsLoading(false);
      alert('An error occurred. Please try again.');
    }
  };


  return (
    <div className="App-header">
    <div className="auth-container">
      <div className="logo-container">
        <img src={logo} height="300" width="250" alt="Logo"/>
      </div>
      <div className="auth-page">
        <h4 className="theme">WELCOME TO AMUZE</h4>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="toggle-mode">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
    </div>
  );
}

export default AuthPage;