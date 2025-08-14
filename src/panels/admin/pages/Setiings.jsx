import React, { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@example.com",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
      <form onSubmit={handleSave} className="bg-gray-100 p-4 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="Enter new password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
