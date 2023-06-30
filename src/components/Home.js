import React, { createRef, useEffect, useRef } from "react";
import '../styles/Home.css'
import Laptop from '../assets/port-laptop2.png'
import Phone from '../assets/port-phone2.png'
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Home() {

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
        <>
            <div ref={myRef} className="home-bubble bg-[#151515] rounded-[40px] flex flex-column flex-nowrap justify-center mx-4 py-16 px-6 md:px-10 lg:px-40 xl:px-56">
                <div className="content flex-col h-min justify-start gap-8 items-center">

                    <div className="title text-center font-extrabold leading-none text-[#fff] space-y-4">
                        Hello, Nice to Meet You.<br></br> My Name is Rick
                        <p className="subtext text-[22px] text-[#54545d] font-sans font-normal lg:leading-8 md:leading-7 leading-7 ">
                            <p className="text-2xl md:text-3xl pb-4 font-bold">Based in San Antonio, Tx.</p>
                        I am a front-end web developer determined to transition into a full-time software development career. While my background lies in working in the Emergency Room for the past six years, I am eager to make Software Engineering my primary focus.
                        </p>
                        
                    </div>

                    <div className="flex justify-center items-center py-8 text-[#fff] font-bold text-xl">

                        <Link
                            to="contact-section"
                            smooth={true}
                            duration={900}
                        >
                            <button className="bg-gradient-to-b from-orange-300 to-orange-600 px-10 py-3 rounded-[40px]">
                                Contact Me
                            </button>
                        </Link>

                    </div>

                    <div class="home-img flex justify-center gap-4 lg:gap-16 pt-2">
                        <img src={Laptop} alt="Laptop" class="w-[50%] lg:w-[55%] rounded-3xl " />
                        <img src={Phone} alt="Phone" class="w-[50%] lg:w-[55%] rounded-3xl " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;