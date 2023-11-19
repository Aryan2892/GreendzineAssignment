// // Inside Dashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../style/Dashboard.css'; // Make sure to import the CSS file
// import image1 from './Group 46.png';
// import image2 from './moptro logo.png';

// // Functional component for the dashboard
// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         {/* Add the images above the text */}
//         <img src={image1} alt="Logo" className="dashboard-image-top-right " />
//         <img src={image2} alt="Style" className="dashboard-image-center" />
//         <h2>Employee Productivity Dashboard</h2>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/dashboard">Home</Link>
//           </li>
//           <li>
//             <Link to="/user-list">User List</Link>
//           </li>
          
//         </ul>
//       </nav>
//       <div className="content">
//         <div className="productivity-bar productivity-monday">Productivity on Monday: 4%</div>
//         <div className="productivity-bar productivity-tuesday">Productivity on Tuesday: 92%</div>
//         <div className="productivity-bar productivity-wednesday">Productivity on Wednesday: 122%</div>
//         <div className="productivity-bar productivity-thursday">Productivity on Thursday: 93%</div>
//         <div className="productivity-bar productivity-friday">Productivity on Friday: 89%</div>
//         <div className="productivity-bar productivity-saturday">Productivity on Saturday: 98%</div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

/// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Dashboard.css'; // Ensure the CSS file is correctly linked
import image1 from './Group 46.png';
import image2 from './moptro logo.png';
import homeIcon from '../style/house.png'; // Update the path to your home icon image
import userListIcon from '../style/user.png';

// Function to calculate width for progress bar
const calculateWidth = (percentage) => {
  return Math.min(Math.max(percentage, 0), 100) + '%'; // Ensures width is between 0% and 100%
};

const Dashboard = () => {
  // Dummy data for productivity percentages
  const productivityData = [
    { day: 'Monday', percentage: 4 },
    { day: 'Tuesday', percentage: 80 },
    { day: 'Wednesday', percentage: 122 }, // Example when it exceeds 100%
    { day: 'Thursday', percentage: 93 },
    { day: 'Friday', percentage: 89 },
    { day: 'Saturday', percentage: 98 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img src={image1} alt="Logo" className="dashboard-image-top-right " />
        <img src={image2} alt="Style" className="dashboard-image-center" />
        <h2>Employee Productivity Dashboard</h2>
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
      
      {productivityData.map((data) => (
        <div className="progress-bar-container" key={data.day}>
          <div className="progress-bar-label">Productivity on {data.day}: {data.percentage}%</div>
          <div className="progress-bar">
            <div className="progress-bar-inner" style={{ width: calculateWidth(data.percentage) }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
