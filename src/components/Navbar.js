import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMenuVisible(true);
  };

  const handleMenuClose = () => {
    setIsMenuVisible(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };

  return (
    <>
      <div className="navbar my-8 mx-auto w-full">
        {/* Hamburger menu button */}

        <div className="bg-white fixed py-[30px] top-0 left-0 w-full z-10 lg:hidden md:hidden">
         
        <button className={`hamburger-btn ${isMobileMenuOpen ? "active" : ""}`} onClick={handleMobileMenuToggle}>
            
              <GiHamburgerMenu size={40} />
            </button>
          
        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
          <div className={`mobile-menu ${isMenuVisible ? "visible" : "" }`}>
            <button className="close-btn" onClick={handleMenuClose}>
              <span className="close-icon"> &#10005; </span>
            </button>

            <ul className="mobile-menu-links">
            <li>
              <Link to="home-section" smooth={true} duration={900} onClick={handleMenuClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about-section" smooth={true} duration={900} onClick={handleMenuClose}>
                About
              </Link>
            </li>
            <li>
              <Link to="education-section" smooth={true} duration={900} onClick={handleMenuClose}>
                Education
              </Link>
            </li>
            <li>
              <Link to="contact-section" smooth={true} duration={900} onClick={handleMenuClose}>
                Contact
              </Link>
            </li>
          </ul>

          </div>
        )}


        {/* Nav Links */}
        <ul
          className={`flex flex-row flex-nowrap justify-center items-center overflow-hidden ${isMobileMenuOpen ? "mobile-menu-open" : ""
            }`}
        >
          <li className="px-10">

            <button className="nav-link cursor-pointer">
              <Link
                to="home-section"
                smooth={true}
                duration={900}
              >
                Home
              </Link>
            </button>

          </li>

          <li className="px-10">
            <button className="nav-link cursor-pointer">
              <Link
                to="about-section"
                smooth={true}
                duration={900}
              >
                About
              </Link>
            </button>
          </li>

          <FaReact className="logo text-orange-500" size={50} />

          <li className="px-10">
            <button className="nav-link cursor-pointer">
              <Link
                to="education-section"
                smooth={true}
                duration={900}
              >
                Education
              </Link>
            </button>
          </li>

          <li className="px-10">
            <button className="nav-link cursor-pointer">
              <Link
                to="contact-section"
                smooth={true}
                duration={900}
              >
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}


export default Navbar;