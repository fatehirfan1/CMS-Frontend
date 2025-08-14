import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminPanel from './panels/admin/AdminPanel';

const App = () => {
  return (
    <Routes>
      {/* Redirect root path to /admin */}
      <Route path="/" element={<Navigate to="/admin" replace />} />

      {/* Admin panel routes */}
      <Route path="/admin/*" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
