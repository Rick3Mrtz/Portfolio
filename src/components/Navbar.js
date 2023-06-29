import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar my-8 mx-auto w-full">
        {/* Hamburger menu button */}

        <div className="bg-white fixed py-8 top-0 right-0 w-full z-10 lg:hidden md:hidden">
          <div
            className="hamburger-btn"
            onClick={handleMobileMenuToggle}>
            <button>
              <GiHamburgerMenu size={40} />
            </button>
          </div>
        </div>


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