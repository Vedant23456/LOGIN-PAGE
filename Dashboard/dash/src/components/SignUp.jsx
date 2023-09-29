import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const watermarkStyle = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    color: 'rgba(0, 0, 255, 0.2)', 
    fontSize: '1.2rem',
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center relative">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-[20rem]">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="input-field"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="input-field mt-4"
        />
        <input
          type="password"
          placeholder="Create Password"
          className="input-field mt-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field mt-4"
        />

        <button
          id="signup-button"
          className="btn-primary mt-4 w-full transition duration-300"
        >
          Sign Up
        </button>

        <div className="mt-4">Or</div>
        <button
          id="google-signup-button"
          className="btn-secondary mt-4 w-full transition duration-300"
        >
          Continue with Github
        </button>
        <div className='mt-4'>
          <p>ALREADY HAVE AN ACCOUNT??</p>
          <Link to="/login" className='text-blue-500'>Sign In</Link>
        </div>
      </div>

      <div style={watermarkStyle}>Watermarked by VEDANT'S Hub</div>
    </div>
  );
}

export default SignUp;
