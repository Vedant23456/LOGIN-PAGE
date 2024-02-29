import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 text-gray-700 h-16 flex items-center justify-between px-8 fixed w-full top-0">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold mr-8">Home</Link>
      </div>
      <div className="md:flex items-center space-x-4 ml-auto">
        <Link to="/signup" className="hidden md:inline">SignUp</Link>
        <Link to="/login" className="hidden md:inline">Login</Link>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={`md:flex flex-col items-end ${isOpen ? "block" : "hidden"}`}>
        <Link to="/signup" className="nav-link mb-4 md:hidden" onClick={toggleMenu}>
          SignUp
        </Link>
        <Link to="/login" className="nav-link mb-4 md:hidden" onClick={toggleMenu}>
          Login
        </Link>
      </div>
    </nav>
  );
}
