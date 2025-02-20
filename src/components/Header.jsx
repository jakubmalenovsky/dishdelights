import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Ensure correct import if inside src/assets
import styles from './header.module.css';  // Correct import for CSS module
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle navbar visibility
  };

  return (
    <header className={styles.header}>
      <img 
        src={logo} 
        alt="Logo" 
        className={styles.logo}
      />
      {/* Burger Menu */}
      <div 
        className={`${styles.burgerMenu} ${isNavOpen ? styles.active : ''}`} 
        onClick={toggleNav}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Navbar */}
      <nav className={`${styles.navbar} ${isNavOpen ? styles.active : ''}`}>
        <ul>
            <li><Link to="" className="hover:underline" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="./recipesview" className="hover:underline" style={{ color: 'black', textDecoration: 'none' }}>Recipes</Link></li>
            <li><Link to="./contactview" className="hover:underline" style={{ color: 'black', textDecoration: 'none' }}>Contacts</Link></li>
            <li><Link to="./favview" className="hover:underline" style={{ color: 'black', textDecoration: 'none' }}>Favorites</Link></li>
            <li><Link to="./aboutview" className="hover:underline" style={{ color: 'black', textDecoration: 'none' }}>About</Link></li>
        </ul>
      </nav>
    </header>
  );
}