
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import UserListView from '../components/UserListView';


const AppRouter = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/user-list" element={<UserListView />}></Route>
        </Routes>
      </Router>
    );
  };
  

export default AppRouter;
