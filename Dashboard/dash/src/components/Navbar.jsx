import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-screen bg-gray-300 text-gray-700 w-40 md:w-16 fixed left-0 top-0 flex flex-col items-center justify-center border-r border-gray-400">
      <div className="text-xl font-bold mb-8">V HUB</div>
      <div
        className={`md:hidden cursor-pointer mb-8 ${isOpen ? "hidden" : "block"}`}
        onClick={toggleMenu}
      >
        ☰
      </div>
      <div className={`md:flex flex-col items-center ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" className="nav-link mb-4" onClick={toggleMenu}>
          Dashb
        </Link>
        <Link to="/login" className="nav-link mb-4" onClick={toggleMenu}>
          Login
        </Link>
        <Link to="/signup" className="nav-link mb-4" onClick={toggleMenu}>
          SignUp
        </Link>
      </div>
    </nav>
  );
}
