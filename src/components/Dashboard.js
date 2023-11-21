// Inside Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Dashboard.css';
import image1 from './Group 46.png';
import image2 from './moptro logo.png';
import homeIcon from '../style/house.png';
import userListIcon from '../style/user.png';

const Dashboard = () => {
  const productivityData = [
    { day: 'Monday', percentage: 4 },
    { day: 'Tuesday', percentage: 80 },
    { day: 'Wednesday', percentage: 122 },
    { day: 'Thursday', percentage: 93 },
    { day: 'Friday', percentage: 89 },
    { day: 'Saturday', percentage: 98 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img src={image1} alt="Logo" className="dashboard-image-top-right" />
        <img src={image2} alt="Style" className="dashboard-image-center" />
        <h2 className="dashboard-title">Employee Productivity Dashboard</h2>
      </div>
      
      <div className="content">
        {productivityData.map((data) => (
          <div className="progress-bar-container" key={data.day}>
            <div className="progress-bar-label">Productivity on {data.day}: {data.percentage}%</div>
            <div className="progress-bar">
              <div className="progress-bar-inner" style={{ width: `${data.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>

    <div className="nav-container"> 
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">
                <img src={homeIcon} alt="Home" className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link to="/user-list">
                <img src={userListIcon} alt="User List" className="nav-icon" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
