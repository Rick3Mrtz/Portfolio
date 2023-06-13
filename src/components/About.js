import React from "react";
import '../styles/About.css'
import Avi from '../assets/Slack-pic.png'

function About() {
  return (
    <>
      <div className="w-full flex justify-center items-center my-16 text-3xl font-sans text-gray-500 tracking-widest">
        About Me
      </div>
      <div className="about-container md:mx-20 lg:mx-20 my-16">
        <div className="About-me md:flex lg:flex justify-center">
          <div className="sm:w-full w-1/2 flex justify-center items-center"> {/* Modified line */}
            <div className="w-4/5 relative">
              <img src={Avi} alt="Avi" className="Avi rounded-full pb-8" />
            </div>
          </div>
          <div className=" sm:w-full sm:px-2 w-1/2 flex justify-center items-center font-sans text-base md:text-xl lg:text-2xl leading-loose tracking-wider font-semibold">
            Hello my name is Rick! As someone who has a newfound passion for Web Developing, I am ready to join a professional team of Software Developers. I am highly motivated and most of all eager to apply my technical skills and contribute to a team of Software Engineers.
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
