import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Signup data:', formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 mb-4 border rounded-md"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded-md"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 border rounded-md"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-green-500">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
