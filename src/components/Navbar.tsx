"use client"
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Legacy Watches</div>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/watches" className="nav-link">Watches</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <button className="menu-button" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <Link href="/" className="mobile-link">Home</Link>
        <Link href="/about" className="mobile-link">About</Link>
        <Link href="/watches" className="mobile-link">Watches</Link>
        <Link href="/contact" className="mobile-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
