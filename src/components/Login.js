import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import loginImage from './Group 3.png'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const isAuthenticated = validateCredentials(email, password);

    if (isAuthenticated) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const validateCredentials = (enteredEmail, enteredPassword) => {
    return enteredEmail === 'user@example.com' && enteredPassword === 'password';
  };

  return (
    <div className="login-container">
      <img src={loginImage} alt="Login" className="login-image" />
     
      <form>

        <div className="electric">
            #WeAreElectric
        </div>

        <label htmlFor="email"></label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail"
        />
        
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        
        <button type="button" onClick={handleLogin} >
          Login
        </button>
      </form>
      <div className="forgot-password">
        Forgot Password?
      </div>
    </div>
  );
};

export default Login;