import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';

export default function Landing() {
  let navigate = useNavigate();

  function move() {
    navigate("/members");
  }

  return (
    <div className="landing-container">
      {/* <img src="https://via.placeholder.com/1500x500" alt="Landing Background" className="landing-background" /> */}
      <div className="overlay">
        <h1>Welcome to Our Community</h1>
        <p>Join us and be a part of something amazing.</p>
        <button onClick={move} className="create-button">Join Us</button>
      </div>
    </div>
  );
}

