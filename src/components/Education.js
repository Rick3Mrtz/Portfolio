import React from "react";
import '../styles/Education.css'
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiGreensock } from "react-icons/si"
import { SiJavascript } from "react-icons/si"


function Education() {
    return (
        <>
            <div className=" h-min bg-[#151515] rounded-[40px] flex flex-column flex-nowrap justify-center mx-16 py-10 px-6 md:px-10 lg:px-10 xl:px-10">

                <div className="education text-gray-300 flex flex-col flex-nowrap justify-center items-center text-3xl tracking-widest">
                    Education & Skills
                    <h1 className="text-6xl font-bold text-white text-center px-0 py-16">The University of Texas - Austin
                    </h1>



                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-16 tracking-normal">
                        {/* Card 1 */}
                        <div className="bg-white text-center p-4">
                            <DiHtml5 size={50}/>
                            <h2>HTML</h2>
                            <p>Card 1 content</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white text-center p-4">
                            <DiCss3 size={50}/>
                            <h2>CSS</h2>
                            <p>Card 2 content</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white text-center p-4">
                            <FaReact size={50}/>
                            <h2>React</h2>
                            <p>Card 3 content</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white text-center p-4">
                            <SiTailwindcss size={50}/>
                            <h2>Tailwind</h2>
                            <p>Card 4 content</p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white text-center p-4">
                            <SiGreensock size={50}/>
                            <h2>GSAP Animation</h2>
                            <p>Card 5 content</p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white text-center p-4">
                            <SiJavascript size={50}/>
                            <h2>JavaScript</h2>
                            <p>Card 6 content</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Education;