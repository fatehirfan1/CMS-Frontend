import React from "react";

const Users = () => {
  const users = [
    { id: 1, name: "Ali", role: "Student", email: "ali@gmail.com" },
    { id: 2, name: "Hamza", role: "Teacher", email: "hamza@gmail.com" },
    { id: 3, name: "Umair", role: "Admin", email: "umair@gmail.com" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{i + 1}</td>
                <td className="py-2 px-4">{u.name}</td>
                <td className="py-2 px-4">{u.role}</td>
                <td className="py-2 px-4">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
