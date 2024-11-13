// Sidebar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    const { onLogout } = this.props;

    const handleLogout = () => {
      if (onLogout) {
        onLogout(); // Call the onLogout function passed as a prop
      }
      // Redirect to login (handled in App.js)
    };

    return (
      <div style={{
        backgroundColor: '#F2DCDB',
        height: 'calc(100vh - 60px)', // Adjust height for the header
        width: '200px',
        position: 'fixed',
        top: 60, // Position below the header
        left: 0,
        overflowY: 'auto', // Allow scrolling if content overflows
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Space out items
      }}>
        <div className="d-flex flex-column align-items-center pt-3">
          <ul className="navbar-nav flex-column">
            <li className="navbar-item">  
              <Link to="/" className="nav-link text-black">
                Properties
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link text-black">
                Add New Property
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link text-black">
                Create User
              </Link>
            </li>
            <li className="navbar-item">  
              <Link to="/" className="nav-link text-black">
                View By Material Type
              </Link>
            </li>
            <li className="navbar-item">  
              <Link to="/" className="nav-link text-black">
                View By Acquisition Type
              </Link>
            </li>
            <li className="navbar-item">  
              <Link to="/" className="nav-link text-black">
                View By Assigned Staff
              </Link>
            </li>
            <li className="navbar-item">  
              <Link to="/" className="nav-link text-black">
                View By Assigned Office
              </Link>
            </li>            
          </ul>
        </div>
        <button 
          onClick={handleLogout} 
          style={{ margin: '10px', width: '90%'}} // Add margin for spacing
        >
          Logout
        </button>
      </div>
    );
  }
}
