import React, { useState } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Ahmed Raza", subject: "Mathematics", email: "ahmed@gmail.com", phone: "0300-1234567" },
    { id: 2, name: "Fatima Khan", subject: "English", email: "fatima@gmail.com", phone: "0301-2345678" },
    { id: 3, name: "Bilal Ahmed", subject: "Physics", email: "bilal@gmail.com", phone: "0302-3456789" },
  ]);

  const [form, setForm] = useState({
    id: null,
    name: "",
    subject: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save or update teacher
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.subject || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    if (isEditing) {
      setTeachers(teachers.map((t) => (t.id === form.id ? form : t)));
      setIsEditing(false);
    } else {
      setTeachers([...teachers, { ...form, id: Date.now() }]);
    }

    setForm({ id: null, name: "", subject: "", email: "", phone: "" });
  };

  // Edit teacher
  const handleEdit = (teacher) => {
    setForm(teacher);
    setIsEditing(true);
  };

  // Delete teacher
  const handleDelete = (id) => {
    setTeachers(teachers.filter((t) => t.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Teachers</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-md shadow-md mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input
            name="name"
            placeholder="Teacher Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
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
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
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
          {isEditing ? "Update Teacher" : "Add Teacher"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Subject</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((teacher, i) => (
                <tr
                  key={teacher.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{i + 1}</td>
                  <td className="py-2 px-4">{teacher.name}</td>
                  <td className="py-2 px-4">{teacher.subject}</td>
                  <td className="py-2 px-4">{teacher.email}</td>
                  <td className="py-2 px-4">{teacher.phone}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleEdit(teacher)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(teacher.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No teachers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachers;
