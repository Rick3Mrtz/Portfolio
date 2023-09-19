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

        <div className="bg-white fixed py-[15px] top-0 left-0 w-full z-10 lg:hidden md:hidden">
          <p className="text-2xl font-serif font-bold text-[#151515] ml-6">
            Rick Martinez
          </p>
         
        <button className={`hamburger-btn text-[#151515] hover:text-orange-500 duration-200 ${isMobileMenuOpen ? "active" : ""}`} onClick={handleMobileMenuToggle}>
            
              <GiHamburgerMenu size={40} />
            </button>
          
        </div>

        {isMobileMenuOpen && (
          <div className={`mobile-menu ${isMenuVisible ? "visible" : "" }`}>
            <button className="close-btn text-white hover:text-orange-500 duration-200" onClick={handleMenuClose}>
              <span className="close-icon"> &#10005; </span>
            </button>

            <ul className="mobile-menu-links">
            <li>
              <Link to="home-section" smooth={true} duration={900} onClick={handleMenuClose} className="hover:text-orange-500 duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="about-section" smooth={true} duration={900} onClick={handleMenuClose} className="hover:text-orange-500 duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="education-section" smooth={true} duration={900} onClick={handleMenuClose} className="hover:text-orange-500 duration-200">
                Education
              </Link>
            </li>
            <li>
              <Link to="contact-section" smooth={true} duration={900} onClick={handleMenuClose} className="hover:text-orange-500 duration-200">
                Contact
              </Link>
            </li>
          </ul>

          </div>
        )}

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