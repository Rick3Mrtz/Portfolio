import React from "react";
import '../styles/Navbar.css'

function Navbar () {
    return (
        <>
        <div className="navbar my-8 mx-auto">
          
            <ul className=' flex flex-row flex-nowrap justify-center items-center overflow-hidden'>
              <li className='px-10'><a href="#">Home</a></li>
              <li className='px-10'><a href="#">About</a></li>
              <a href="#" className="logo px-10">LOGO</a>
              <li className='px-10'><a href="#">Education</a></li>
              <li className='px-10'><a href="#">Contact</a></li>
            </ul>
          
        </div>
      </>
    )
}

export default Navbar;