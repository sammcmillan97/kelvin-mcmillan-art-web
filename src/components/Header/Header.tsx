import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header: React.FC = () => {
    return (
      <div className="header-content">
        <h1 id="title">Kelvin McMillan Art</h1>
        <p id="artist-info">Artist, Canterbury New Zealand</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/home" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
              </NavLink>
            </li>
            <li>
            <NavLink to="/Originals" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Originals
              </NavLink>
            </li>
            <li>
            <NavLink to="/Prints" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Prints
              </NavLink>
            </li>
            <li>
            <NavLink to="/About" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  About
              </NavLink>
            </li>
            <li>
            <NavLink to="/Contact" 
                  className={({ isActive }) => isActive ? 'active' : ''}>
                  Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;