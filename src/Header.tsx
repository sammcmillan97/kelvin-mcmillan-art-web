import React from "react";
import "./Header.css";

const Header: React.FC = () => {
    return (
      <div className="header-content">
        <h1>Kelvin McMillan Art</h1>
        <p id="artist-info">Artist, Canterbury New Zealand</p>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Originals</a></li>
            <li><a href="#">Giclee Prints</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;