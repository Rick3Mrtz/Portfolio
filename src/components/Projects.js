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
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
            <a href="https://jate-emporium.herokuapp.com/" className="cursor-pointer underline font-bold lg:text-4xl" >E-Commerce Website</a>
            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">GreenSock (GSAP) Animation, useEffect/useState,<br></br> Parallax Scrolling, Tailwind CSS, React. </p>
          </p>
          <p className="gist flex">Front End Dev/Designer</p>
          
        </div>
      </div>

      <div className="project-container w-full sm:px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
        
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
          <a href="https://rick3mrtz.github.io/Glassmorphism/" className="cursor-pointer underline font-bold lg:text-4xl" >
            Glassmorphism</a>

            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">Practiced w/ New CSS Trend, React, Vanilla CSS.  </p>
          </p>

          <p className="gist flex">Front End Dev/Designer</p>
        </div>
      </div>

      <div className="project-container w-full sm:px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
        
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
          <a href="https://rick3mrtz.github.io/Portfolio/" className="cursor-not-allowed font-bold lg:text-4xl line-through" >
            Marvel Database</a>
            
            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">*WORK IN PROGRESS*<br></br>React, Tailwind, GSAP, API, Axios </p>
          </p>

          <p className="gist flex">Front End Dev/Designer</p>
        </div>
      </div>





                                    {/* WILL USE WHEN I FIND MY DEV CARDS I MADE FOR PROJECT */}





      {/* <div className="project-container w-full sm:px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
        
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
          <a href="https://google.com/" className="cursor-pointer underline font-bold lg:text-4xl" >
            Profile Cards</a>
            
            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">Tailwind CSS, React. </p>
          </p>

          <p className="gist flex">Front End Dev/Designer</p>
        </div>
      </div> */}

      <div className="w-full flex flex-col items-start py-20">
          <p className="projects font-sans text-gray-400 tracking-widest py-12 mx-20 text-4xl">
            Currently
          </p>

          <p className="current flex flex-col items-center w-full lg:text-2xl lg:leading-loose leading-9 md:text-xl sm:text-[14px] text-gray-500 tracking-wider list-none">
            <li>- Self Educating myself on UX/UI</li>
            <li>- Always looking for new Animation Libraries</li>
            <li>- Front End is my comfort zone</li>
            <li>- Working on my Weaknesses</li>
            <li>- Looking forward to collaborating with a<br></br>Creative and Innovative Development team!</li>
          </p>
        </div>

      
    </>
  );
}

export default Projects;


