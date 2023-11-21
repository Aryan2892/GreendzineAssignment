import React, { useState, useEffect } from 'react';
import employeeData from '../employeeData'; 
import homeIcon from '../style/house.png'; 
import userListIcon from '../style/user.png';
import icon from '../components/moptro logo.png'; 
import userIcon from '../components/Group 46.png'; 
import { Link } from 'react-router-dom';
import '../style/userlist.css';

const UserListView = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setEmployeeList(employeeData);
  }, []);

  const handleSearch = () => {
    const filteredList = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setEmployeeList(filteredList);
  };

  return (
    <div className="user-list-view">
      <div className="header">
        <img src={icon} alt="Logo" className="header-logo" />
        <img src={userIcon} alt="User" className="user-icon" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search with name"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>
      <div className="employee-list">
        {employeeList.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-info">
              <p><strong>EMP ID:</strong> {employee.id}</p>
              <p><strong>Name:</strong> {employee.name}</p>
              <div className="employee-dob-line">
                <strong>DOB:</strong> <span className="employee-dob">{employee.dob}</span>
              </div>
              <div className="employee-role-line">
                <strong>Role:</strong> <span className="employee-role">{employee.role}</span>
              </div>
            </div>
            <div className="employee-number">
              <span>{employee.number}</span>
            </div>
          </div>
        ))}
      </div>
      <nav className='nav-container'>
        <ul>
          <li>
            <Link to="/dashboard">
              <p className='title'>Home</p><img src={homeIcon} alt="Dashboard" className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link to="/user-list">
            <p className='title'>User</p><img src={userListIcon} alt="User List" className="nav-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserListView;
