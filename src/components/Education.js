import React, { createRef, useEffect, useRef } from "react";
import '../styles/Education.css'
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiGreensock } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function Education() {
    return (
        <div className="overflow-hidden">
            <div id="education-section" className=" h-min bg-[#151515] rounded-[40px] flex flex-column flex-nowrap justify-center mx-16 py-10 px-6 md:px-10 lg:px-10 xl:px-10">

                <div className="education text-gray-500 flex flex-col flex-nowrap justify-center items-center text-3xl tracking-widest">
                    Education & Skills
                    <h1 className="text-6xl font-bold text-white text-center px-0 pt-16 pb-8">The University of Texas - Austin
                    </h1>
                    <p className="text-xl text-gray-500">
                        Graduated Full Stack Flex Coding Bootcamp<br></br>
                    </p>

                    <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 py-16 tracking-normal text-gray-300">
                        {/* Card 1 */}
                        <div className=" text-center p-4">
                            <DiHtml5 className="icon" size={130}/>
                            
                        </div>

                        {/* Card 2 */}
                        <div className=" text-center p-4 ">
                            <DiCss3 className="icon" size={130}/>
                            
                        </div>

                        {/* Card 3 */}
                        <div className=" text-center p-4">
                            <FaReact className="icon" size={130}/>
                            
                        </div>

                        {/* Card 4 */}
                        <div className=" text-center p-4">
                            <SiTailwindcss className="icon" size={130}/>
                            
                        </div>

                        {/* Card 5 */}
                        <div className=" text-center p-4">
                            <SiGreensock className="icon" size={130}/>
                            
                        </div>

                        {/* Card 6 */}
                        <div className=" text-center p-4">
                            <SiJavascript className="icon" size={130}/>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Education;