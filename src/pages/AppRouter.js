// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import UserListView from '../components/UserListView';

// Functional component for handling app routing
const AppRouter = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/user-list" element={<UserListView />}></Route>
          {/* <Route path="/login" element={Login} /> */}
          {/* <Route path="/dashboard" element={Dashboard} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    );
  };
  

export default AppRouter;
