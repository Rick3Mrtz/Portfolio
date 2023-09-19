import React, { createRef, useEffect, useRef } from "react";
import '../styles/About.css'
import Avi from '../assets/Slack-pic.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function About() {

  const myRef = useRef(null);
    useEffect(() => {
        let fromVar = gsap.from(myRef.current, {
            opacity: 0,
            duration: 3,
            y: 90,
            immediateRender: false,
        });
        return () => {
            fromVar.kill();
        };
    }, []);


  return (
    <div ref={myRef}>
      <div id="about-section" className=" flex mx-20 my-12 text-4xl font-sans uppercase text-gray-400 tracking-widest">
        About Me
      </div>
      <div className="about-container md:mx-20 lg:mx-20 my-6">
        <div className="About-me  justify-center">
          <div className="sm:w-full flex justify-center items-center">
            <div className="w-4/5 relative">
              <img src={Avi} alt="Avi" className="Avi rounded-full pb-8" />
            </div>
          </div>
          <div className="mx-4 flex justify-center items-center font-sans text-base md:text-xl lg:text-2xl lg:leading-10 tracking-wider leading-7 font-semibold text-center">
          My experience in the Emergency Room has taught me valuable skills that I believe are transferable to web development. The fast-paced and high-pressure environment of the ER has honed my ability to think quickly on my feet, problem-solve under tight deadlines, and work effectively as part of a team.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
