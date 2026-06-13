import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

export default function App() {
  const [user, setUser] = useState(null);
  
  // Employees ka data jo Admin manage karega
  const [employees, setEmployees] = useState(() => {
    const savedData = localStorage.getItem('ems_employees');
    return savedData ? JSON.parse(savedData) : [
      { id: 1, name: 'Mahesh sharma', role: 'Developer', salary: '50000' },
      { id: 2, name: 'Amrita verma', role: 'Designer', salary: '45000' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('ems_employees', JSON.stringify(employees));
  }, [employees]);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };
  const handleLogout = () => {
    setUser(null);
  };

  // Naya Employee Add karne ke liye 
  const addEmployee = (e) => {
    e.preventDefault();
    const name = e.target.empName.value;
    const role = e.target.empRole.value;
    const salary = e.target.empSalary.value;

    if (!name || !role || !salary) return alert("All fields are required!");

    const newEmp = { id: Date.now(), name, role, salary };
    setEmployees([...employees, newEmp]);
    e.target.reset();
  };

  // Employee Delete karne ke liye (Admin Feature)
  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // 1. Agar logged in nahi hai toh Login Screen dikhao
  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // 2. Agar Admin Login hua hai
  if (user.role === 'admin') {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
            <h1 className="text-xl font-bold text-indigo-700">Admin Dashboard ({user.email})</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Logout
            </button>
          </div>

          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Add New Employee</h2>
            <form onSubmit={addEmployee} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input name="empName" type="text" placeholder="Employee Name" className="p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
              <input name="empRole" type="text" placeholder="Role" className="p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
              <input name="empSalary" type="number" placeholder="Salary" className="p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
              <button type="submit" className="md:col-span-3 bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition font-medium">
                Add Employee
              </button>
            </form>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b text-gray-600 text-sm uppercase">
                  <th className="p-4">Name</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Salary</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className="border-b hover:bg-gray-550 transition">
                    <td className="p-4 font-medium text-gray-800">{emp.name}</td>
                    <td className="p-4 text-gray-600">{emp.role}</td>
                    <td className="p-4 text-gray-600">₹{emp.salary}</td>
                    <td className="p-4 text-center">
                      <button onClick={() => deleteEmployee(emp.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // 3. Agar Normal Employee Login hua hai
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-6">
          <h1 className="text-xl font-bold text-green-700">Employee Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="w-24 h-24 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
            E1
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back!</h2>
          <p className="text-gray-500 mb-4">{user.email}</p>
          <div className="border-t pt-4 text-left space-y-2">
            <p className="text-gray-600"><strong>Status:</strong> Active</p>
            <p className="text-gray-600"><strong>Project Assigned:</strong> EMS Portal Optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
}