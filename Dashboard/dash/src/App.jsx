import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./components/Dashboard";
import LoginPage from "./components/Login";
import SignUpPage from "./components/SignUp";

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
   
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    
  );
}

export default App;
