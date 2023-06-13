import React from "react";
import "../styles/Navbar.css";
import { FaReact } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="navbar my-8 mx-auto">
        <ul className="flex flex-row flex-nowrap justify-center items-center overflow-hidden">
          <li className="px-10">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="px-10">
            <a href="#" className="nav-link">About</a>
          </li>
          <FaReact className="logo animate-spin text-orange-500" size={50} />
          <li className="px-10">
            <a href="#" className="nav-link">Education</a>
          </li>
          <li className="px-10">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
