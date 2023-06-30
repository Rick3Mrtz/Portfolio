import React from "react";
import '../styles/Contact.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Contact() {
    return (
        <>
            <div className="bg-[#151515] flex justify-center items-center w-full rounded-t-[40px] h-[30vh] lg:h-[35vh] md:h-[35vh] sm:h-[30vh] font-sans">

                <div className="flex flex-col justify-center text-white leading-none font-bold text-4xl md:text-6xl lg:text-[4rem] text-center tracking-wider">
                    Ready To<br></br>Collaborate?

                    <div className="links flex justify-center items-center gap-8 py-10">
                        <a href='http://www.linkedin.com/in/rickmrtz3'>
                            <FaLinkedin size={50} id='linked' className='cursor-pointer hover:scale-125 duration-200 text-gray-400 hover:text-orange-400' />
                        </a>

                        <a href='https://github.com/Rick3Mrtz'>
                            <FaGithub size={50} id='github' className='cursor-pointer hover:scale-125 duration-200 text-gray-400 hover:text-orange-400' />
                        </a>

                        <a href="mailto:Rick.mrtz3@gmail.com">
                            <AiOutlineMail size={50} id='email' className='cursor-pointer hover:scale-125 duration-200 text-gray-400 hover:text-orange-400' />
                        </a>
                    </div>
                </div>
            </div>
            <div className=" border-b-[0.1px] border-orange-400"></div>


            <div id="contact-section" className="bg-[#151515] flex justify-between items-center w-full h-[8vh] text-gray-500 p-8 overflow-hidden text-[12px] md:text-base lg:text-base">
                <p>Front End Developer</p>
                <p>Rick Martinez | 2023</p>
                <p>Software Engineer</p>
            </div>
        </>
    )
}

export default Contact;