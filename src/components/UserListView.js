// Inside UserListView.js
import React, { useState, useEffect } from 'react';
import employeeData from '../employeeData'; // Adjust the path as needed
import '../style/userlist.css'; // Make sure to include the CSS file for styling

const UserListView = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initialize the employee list with dummy data
    setEmployeeList(employeeData);
  }, []);

  const handleSearch = () => {
    // Implement search logic based on the employee name
    // Filtered list based on the search query
    const filteredList = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setEmployeeList(filteredList);
  };

  return (
    <div className="user-list-view">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search with name"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          🔍 {/* You can replace this with an actual search icon */}
        </button>
      </div>
      <div className="employee-list">
        {employeeList.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-info">
              <p><strong>EMP ID:</strong> {employee.id}</p>
              <p><strong>Name:</strong> {employee.name}</p>
              <p><strong>DOB:</strong> {employee.dob}</p>
              <p><strong>Role:</strong> {employee.role}</p>
            </div>
            <div className="employee-number">
              <span>{employee.number}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListView;