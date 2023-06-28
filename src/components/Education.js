import React, { createRef, useEffect, useRef } from "react";
import '../styles/Education.css'
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiGreensock } from "react-icons/si"
import { DiJavascript1 } from "react-icons/di"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function Education() {
    return (
        <div className="overflow-hidden">
            <div id="education-section" className=" h-min bg-[#151515] rounded-[40px] flex flex-column flex-nowrap justify-center mx-16 py-10 px-6 md:px-10 lg:px-10 xl:px-10">

                <div className="education text-gray-500 flex flex-col flex-nowrap justify-center items-center text-3xl tracking-widest">
                    Education & Skills
                    <h1 className=" ut lg:text-6xl md:text-5xl font-bold text-white text-center px-0 pt-10 pb-10">The University of Texas - Austin
                    </h1>
                    <p className=" mern text-xl md:text-2xl lg:text-3xl text-center text-gray-500">
                        Graduated Full Stack MERN Coding Bootcamp<br></br>
                    </p>

                    <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-8 sm:gap-y-4 md:py-10 lg:py-20 tracking-normal text-gray-300">

                        <div className="text-center p-4 flex flex-col items-center">
                            <DiHtml5 className="icon hover:bg-orange-400 hover:text-[#151515] duration-300" size={130} />
                            <div className="pt-4"></div>
                            <p className="skill-text">HTML</p>
                        </div>


                        <div className="text-center p-4 flex flex-col items-center">
                            <DiCss3 className="icon hover:bg-orange-400 hover:text-[#151515] duration-300 flex flex-col" size={130} />
                            <div className="pt-4"></div>
                            <p className="skill-text">CSS</p>
                        </div>


                        <div className="text-center p-4 flex flex-col items-center">
                            <FaReact className="icon hover:bg-orange-400 hover:text-[#151515] duration-300 flex flex-col" size={130} />
                            <div className="pt-4"></div>
                            <p className="skill-text">REACT</p>
                        </div>


                        <div className="text-center p-4 flex flex-col items-center">
                            <SiTailwindcss className="icon hover:bg-orange-400 hover:text-[#151515] duration-300 flex flex-col" size={130} />
                            <div className="pt-4"></div>
                            <p className="skill-text">TAILWIND</p>
                        </div>


                        <div className="text-center p-4 flex flex-col items-center">
                            <SiGreensock className="icon hover:bg-orange-400 hover:text-[#151515] duration-300 flex flex-col" size={130} />
                            <div className="pt-4"></div>
                            <p className="skill-text">GSAP</p>
                        </div>


                        <div className="text-center p-4 flex flex-col items-center">
                            <DiJavascript1 className="icon hover:bg-orange-400 hover:text-[#151515] duration-300 flex flex-col" size={130} />
                            <div className="pt-4"></div>
                            <p className="skill-text">JAVASCRIPT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;