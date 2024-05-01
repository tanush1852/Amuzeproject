import React, { useState } from 'react';
import "./Auth.css";
import { useNavigate } from 'react-router-dom';
import logo from "./amuze logo.png";
import "./App.css"
function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted
    // Perform authentication logic here
    if (isLogin) {
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      if (email === storedEmail && password === storedPassword) {
        // Navigate after a short delay to show the preloader
        setTimeout(() => {
          setIsLoading(false);
          navigate("/search");
        }, 2000); // Adjust delay as needed
      } else {
        setIsLoading(false);
        alert('Invalid email or password');
      }
    } else {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setIsLoading(false);
      alert('Account created successfully! Please Login!')
      setIsLogin(true);
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