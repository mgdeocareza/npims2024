import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header"; 
import PropertiesList from "./components/properties-list.component";
import EditProperty from "./components/edit-property.component";
import CreateProperty from "./components/create-property.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login"; // Import the Login component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication

  const handleLogin = () => {
    setIsAuthenticated(true); // Update authentication state on successful login
  };

  const handleLogout = () => {
    setIsAuthenticated(false); 
  };

  return (
    <Router>
      <div className="d-flex flex-column">
        <Header />
        <div className="d-flex">
          {isAuthenticated && <Sidebar onLogout={handleLogout} />}
          <div 
            style={{ 
              marginLeft: isAuthenticated ? '200px' : '0', // Adjust for sidebar width if authenticated
              transition: 'margin-left 0.3s',
              width: '100%', // Ensure main content takes full width
            }}
          >
            <Routes>
              <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
              <Route path="/" element={isAuthenticated ? <PropertiesList /> : <Navigate to="/login" />} />
              <Route path="/edit/:id" element={isAuthenticated ? <EditProperty /> : <Navigate to="/login" />} />
              <Route path="/create" element={isAuthenticated ? <CreateProperty /> : <Navigate to="/login" />} />
              <Route path="/user" element={isAuthenticated ? <CreateUser /> : <Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;