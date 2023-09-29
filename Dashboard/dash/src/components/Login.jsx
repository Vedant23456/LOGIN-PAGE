import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsButtonDisabled(!(formData.email && formData.password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center relative">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input-field"
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input-field"
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className={`btn-primary mt-4 w-full transition duration-300 ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={isButtonDisabled}
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-gray-800">Or</div>
        <Link to="/signup">
          <button className="btn-secondary mt-4 w-full transition duration-300 bg-gray-500 hover:bg-gray-600">Sign Up</button>
        </Link>
      </div>

      <div className="absolute bottom-4 right-4 text-gray-400 text-xs">Watermarked by Vedant's Hub</div>
    </div>
  );
}

export default Login;
