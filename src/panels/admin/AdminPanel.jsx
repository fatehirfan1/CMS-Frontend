import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Setiings';
import Students from './pages/Students';
import Teachers from './pages/Teachers';

const AdminPanel = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
