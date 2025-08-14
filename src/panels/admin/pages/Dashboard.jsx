import React, { useState } from "react";

const Dashboard = () => {
  
  const [users, setUsers] = useState([
    { id: 1, name: "Ali", role: "Student", email: "ali@gmail.com" },
    { id: 2, name: "Hamza", role: "Teacher", email: "hamza@gmail.com" },
    { id: 3, name: "Umair", role: "Admin", email: "umair@gmail.com" },
  ]);

  
  const [form, setForm] = useState({ id: null, name: "", role: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save new or updated user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.email) {
      alert("Please fill all fields");
      return;
    }

    if (isEditing) {
      setUsers(users.map((u) => (u.id === form.id ? form : u)));
      setIsEditing(false);
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, name: "", role: "", email: "" });
  };

  // Edit user
  const handleEdit = (user) => {
    setForm(user);
    setIsEditing(true);
  };

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-md shadow-md mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className={`px-4 py-2 rounded-md text-white ${
            isEditing ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {isEditing ? "Update User" : "Add User"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, i) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{i + 1}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
