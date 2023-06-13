import React from "react";
import '../styles/Projects.css';

function Projects() {
    return (
        <>
            <div className="project-container w-full flex p-10 pt-32 overflow-hidden text-2xl">
                <div className="w-[40%] flex justify-between items-center">
                    <p className="projects font-sans text-gray-400 tracking-widest text-4xl">Projects</p>
                </div>
            <div className="flex w-[60%] 1/2 justify-between border-b-2 pb-20 pt-8 ">
                <p className="jate flex font-sans text-gray-400 tracking-widest">
                    Just Another Taco Emporium
                </p>

                <p className="gist flex">
                    Front End Dev/Designer
                </p>
            </div>
            </div>


            <div className="project-container w-full px-10 flex overflow-hidden text-2xl">
                <div className="w-[40%] flex justify-between items-center">
                </div>
                <div className="flex w-[60%] 1/2 justify-between border-b-2 pb-20 pt-8 ">
                    <p className="jate flex font-sans text-gray-400 tracking-widest">
                        Glassmorphism
                    </p>
                    <p className="gist flex">
                        Front End Dev/Designer
                    </p>
                </div>
            </div>

            <div className="project-container w-full p-10 flex overflow-hidden text-2xl">
                <div className="w-[40%] flex flex-col items-start">
                <p className="projects font-sans text-gray-400 tracking-widest text-2xl pb-6">Currently:</p>

                <p className="flex w-full text-[18px] text-gray-500 leading-tight tracking-wider">
                    - Self Educating myself on UX/UI<br></br>
                    - Always looking for new Animation Libraries<br></br>
                    - Front End is my comfort zone <br></br>
                    - Working on my Weaknesses <br></br>
                    - Willing to learn any language
                </p>
                </div>

                <div className="flex w-[60%] 1/2 justify-between border-b-2 pb-20 pt-8 ">
                    <p className="jate flex font-sans text-gray-400 tracking-widest">
                        Marvel Database
                    </p>
                    <p className="gist flex">
                        Front End Dev/Designer
                    </p>
                </div>
            </div>
            <div className="project-container w-full px-10 flex overflow-hidden text-2xl">
                <div className="w-[40%] flex justify-between items-center">
                <div className="w-[40%] flex justify-between items-center">
                    
                </div>
                </div>
                
                <div className="flex w-[60%] 1/2 justify-between border-b-2 pb-20 pt-8 ">
                    <p className="jate flex font-sans text-gray-400 tracking-widest">
                        Profile Cards
                    </p>
                    <p className="gist flex">
                        Front End Dev/Designer
                    </p>
                </div>
            </div>
        </>
    )
}

export default Projects;