import React from "react";
import "../styles/Navbar.css";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-scroll';


function Navbar() {
  return (
    <>
      <div className="navbar my-8 mx-auto">
        <ul className="flex flex-row flex-nowrap justify-center items-center overflow-hidden">
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
