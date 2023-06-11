import React from "react";
import '../styles/Home.css'

function Home () {
    return (
        <>
        <div className=" h-min bg-[#151515] rounded-[40px] flex flex-column flex-nowrap justify-center mx-20 p-20">
            <div className="content flex-col h-min flex-nowrap justify-start gap-8 items-center mx-40">

                <div className="title text-[60px]  text-center font-extrabold leading-none text-[#fff] space-y-8">
                    Hello, Nice to Meet You<br></br> My Name is Rick
                    <p className="subtext text-[18px] text-[#54545d] font-sans font-normal ">
                    Front End Web Dev who also just wants to take up some room to see how all of this looks like. Also please Lord help me find a job eventually or else I will sell all of my Pokemon cards.
                    </p>
                </div>

                <div className="flex justify-center items-center py-8 text-[#fff] font-bold text-xl">

                <button className="bg-gradient-to-b from-orange-300 to-orange-600 px-10 py-3 rounded-[40px]">
                    Contact Me
                </button>

                </div>

                <div>

                </div>
        
            </div>

        </div>
        </>
    )
}

export default Home;