import React, { createRef, useEffect, useRef } from "react";
import '../styles/Home.css'
import Laptop from '../assets/port-laptop2.png'
import Phone from '../assets/port-phone2.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Home () {

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
        <div ref={myRef} className=" h-min bg-[#151515] rounded-[40px] flex flex-column flex-nowrap justify-center mx-16 py-16 px-6 md:px-10 lg:px-40 xl:px-56">
            <div className="content flex-col h-min flex-nowrap justify-start gap-8 items-center">

                <div className="title text-center font-extrabold leading-none text-[#fff] space-y-8">
                    Hello, Nice to Meet You<br></br> My Name is Rick
                    <p className="subtext text-[22px] text-[#54545d] font-sans font-normal lg:leading-7 md:leading-6 leading-5 ">
                         Innovative Front End Web Developer and aspiring UX/UI Designer based in San Antonio, Texas. Constantly seeking to advance my skillset any way possible. Creative, highly motivated, and ready to work!
                    </p>
                </div>

                <div className="flex justify-center items-center py-8 text-[#fff] font-bold text-xl">

                <button className="bg-gradient-to-b from-orange-300 to-orange-600 px-10 py-3 rounded-[40px]">
                    Contact Me
                </button>

                </div>

        <div class="flex justify-center gap-4 lg:gap-16 pt-2">
                <img src={Laptop} alt="Laptop" class="w-[50%] lg:w-[65%] rounded-3xl " />
                <img src={Phone} alt="Phone" class="w-[50%] lg:w-[65%] rounded-3xl " />
        </div>

        
            </div>

        </div>
        </>
    )
}

export default Home;