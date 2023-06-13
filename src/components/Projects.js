import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <>
    <p className="projects font-sans text-gray-400 tracking-widest pt-20 mx-20  text-4xl">
            Projects
          </p>
      <div className="project-container w-full flex sm:px-6 md:px-32 lg:px-40 pt-20 overflow-hidden text-2xl">
        
        
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate flex font-sans text-gray-400 tracking-widest">
            <a href="https://jate-emporium.herokuapp.com/" className="cursor-pointer underline" >Just Another Taco Emporium</a>
          </p>
          <p className="gist flex">Front End Dev/Designer</p>
        </div>
      </div>

      <div className="project-container w-full sm:px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
        
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate flex font-sans text-gray-400 tracking-widest">
            Glassmorphism
          </p>
          <p className="gist flex">Front End Dev/Designer</p>
        </div>
      </div>

      <div className="project-container w-full sm:px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
        
       
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate flex font-sans text-gray-400 tracking-widest">
            Marvel Database
          </p>
          <p className="gist flex">Front End Dev/Designer</p>
        </div>
      </div>

      <div className="project-container w-full sm:px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
      

        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate flex font-sans text-gray-400 tracking-widest">
            Profile Cards
          </p>
          <p className="gist flex">Front End Dev/Designer</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-start py-20">
          <p className="projects font-sans text-gray-400 tracking-widest py-12 mx-20 text-4xl">
            Currently
          </p>

          <p className="current flex flex-col items-center w-full lg:text-2xl lg:leading-loose md:text-xl sm:text-[14px] text-gray-500 leading-tight tracking-wider break-all">
            <li>- Self Educating myself on UX/UI</li>
            <li>- Always looking for new Animation Libraries</li>
            <li>- Front End is my comfort zone</li>
            <li>- Working on my Weaknesses</li>
            <li>- Looking forward to working with a Team that<br></br> will make me a
            better Web Dev every day.</li>
          </p>
        </div>

      
    </>
  );
}

export default Projects;


