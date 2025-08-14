import React, { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Khan", age: 18, grade: "10th", email: "ali@gmail.com" },
    { id: 2, name: "Sara Ahmed", age: 17, grade: "9th", email: "sara@gmail.com" },
    { id: 3, name: "Usman Malik", age: 19, grade: "11th", email: "usman@gmail.com" },
  ]);

  const [form, setForm] = useState({
    id: null,
    name: "",
    age: "",
    grade: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save or update student
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.grade || !form.email) {
      alert("Please fill all fields");
      return;
    }

    if (isEditing) {
      setStudents(students.map((s) => (s.id === form.id ? form : s)));
      setIsEditing(false);
    } else {
      setStudents([...students, { ...form, id: Date.now() }]);
    }

    setForm({ id: null, name: "", age: "", grade: "", email: "" });
  };

  // Edit student
  const handleEdit = (student) => {
    setForm(student);
    setIsEditing(true);
  };

  // Delete student
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Students</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-md shadow-md mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input
            name="name"
            placeholder="Student Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            name="grade"
            placeholder="Grade"
            value={form.grade}
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
          {isEditing ? "Update Student" : "Add Student"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Age</th>
              <th className="py-2 px-4 text-left">Grade</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, i) => (
                <tr
                  key={student.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{i + 1}</td>
                  <td className="py-2 px-4">{student.name}</td>
                  <td className="py-2 px-4">{student.age}</td>
                  <td className="py-2 px-4">{student.grade}</td>
                  <td className="py-2 px-4">{student.email}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleEdit(student)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
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
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
