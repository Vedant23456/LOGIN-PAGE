import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
     </div>    
  );
}

export default App;
