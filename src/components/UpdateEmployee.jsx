import React, { useState, useEffect } from 'react';

function UpdateEmployee({ addEmployee, updateEmployee, currentEmployee, setCurrentEmployee }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    position: '',
    image: ''
  });

  useEffect(() => {
    if (currentEmployee) {
      setFormData(currentEmployee);
    } else {
      setFormData({
        id: '',
        name: '',
        email: '',
        phone: '',
        position: '',
        image: ''
      });
    }
  }, [currentEmployee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEmployee) {
      updateEmployee(formData); // Update the employee details
    } else {
      addEmployee(formData); // Add a new employee
    }
    setFormData({
      id: '',
      name: '',
      email: '',
      phone: '',
      position: '',
      image: ''
    });
    setCurrentEmployee(null); // Clear the current employee
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">{currentEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {currentEmployee ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
