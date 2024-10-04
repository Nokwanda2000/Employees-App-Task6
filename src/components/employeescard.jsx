import React, { useState, useEffect } from 'react';
import UpdateEmployee from './UpdateEmployee';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentEmployee, setCurrentEmployee] = useState(null);

  // Retrieve employees from local storage when the page loads
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  // Function to add a new employee
  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // Function to update an existing employee
  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setCurrentEmployee(null); // Clear current employee after updating
  };

  // Function to delete an employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.id.includes(searchTerm)
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Employee List</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Employee Form for Adding/Updating Employees */}
      {currentEmployee && (
        <UpdateEmployee
          addEmployee={addEmployee}
          updateEmployee={updateEmployee}
          currentEmployee={currentEmployee}
          setCurrentEmployee={setCurrentEmployee}
        />
      )}

      {/* Employee List */}
      <ul className="space-y-4">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <li key={employee.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition duration-200">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{employee.name}</h3>
                <p className="text-gray-600">{employee.position}</p>
                <span className="text-gray-500">{employee.id}</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                  onClick={() => setCurrentEmployee(employee)}>Edit</button>
                <button 
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
                  onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No employees found.</p>
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
