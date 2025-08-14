import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Admin</span>
        <img src="" alt="Profile" />
      </div>
    </header>
  );
};

export default Navbar;
