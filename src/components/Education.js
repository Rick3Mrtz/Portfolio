import React from "react";
import '../styles/Education.css'
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiGreensock } from "react-icons/si"
import { DiJavascript1 } from "react-icons/di"
import { SiReact } from "react-icons/si"
import { FaNode } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { Banner } from "./Banner";
gsap.registerPlugin(ScrollTrigger);


function Education() {

    const images = [
        { name: "HTML5", icon: <DiHtml5 /> },
        { name: "CSS3", icon: <DiCss3 /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "GreenSock", icon: <SiGreensock /> },
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "React-Native", icon: <SiReact /> },
        { name: "Node", icon: <FaNode /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "TypeScript", icon: <SiTypescript /> },
    ].map((image) => ({
        id: crypto.randomUUID(),
        image
    }));


    return (
        <div className="overflow-hidden">
            <div id="education-section" className=" h-min bg-[#151515] rounded-[40px] flex flex-column flex-nowrap justify-center mx-2 py-10 px-4 md:px-10 lg:px-10 xl:px-10">

                <div className="education text-gray-500 flex flex-col flex-nowrap justify-center items-center text-3xl tracking-widest">
                    Education & Skills
                    <h1 className=" ut lg:text-6xl md:text-5xl font-bold text-white text-center px-0 pt-10 pb-10">The University of Texas - Austin
                    </h1>
                    <p className=" mern text-xl md:text-2xl lg:text-3xl text-center text-gray-500">
                        Full Stack MERN Coding Bootcamp<br></br>
                    </p>
                    <Banner images={images} />
                </div>
            </div>
        </div>
    )
}

export default Education;