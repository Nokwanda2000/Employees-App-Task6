import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex mx-auto p-4">
      <nav className="flex justify-between items-center py-4 fixed w-full z-10 top-0 shadow-md">
        {/* Brand Logo */}
        <div className="text-2xl text-blue-500 font-bold hover:text-green-500">
          <Link to="/">DUT</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-[blue] font-medium hover:text-green-500">Home</Link>
          </li>
          <li>
            <Link to="/registerpage" className="text-[blue] font-medium hover:text-green-500">Register</Link>
          </li>
          <li>
            <Link to="/employeespage" className="text-[blue] font-medium hover:text-green-500">Employees</Link>
          </li>
        </ul>
      </nav>

     
    </div>
  );
}
