import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Admin</h2>
      <nav className="space-y-2">
        <Link to="/admin" className="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</Link>
        <Link to="/admin/users" className="block py-2 px-3 rounded hover:bg-gray-700">Users</Link>
        <Link to="/admin/settings" className="block py-2 px-3 rounded hover:bg-gray-700">Settings</Link>
        <Link to="/admin/students" className="block py-2 px-3 rounded hover:bg-gray-700">Students</Link>
        <Link to="/admin/teachers" className="block py-2 px-3 rounded hover:bg-gray-700">Teachers</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
