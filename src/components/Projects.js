import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <p className="projects font-sans text-gray-400 tracking-widest pt-20 mx-20  text-4xl">
        Projects
      </p>

      <div className="project-container w-full px-6 md:px-32 lg:px-40 pt-12 flex overflow-hidden text-2xl">
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
            <a
              href="https://rick3mrtz.github.io/Quik-List/"
              className="cursor-pointer underline font-bold lg:text-4xl hover:text-gray-400"
            >
              QuikList
            </a>
            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">
              Allows user to create any type of list they want<br></br>*STILL
              UNDER DEVELOPMENT*<br></br> React Vite, useState, useEffect,
              Tailwind CSS, Dark Mode{" "}
            </p>
          </p>
        </div>
      </div>

      <div className="project-container w-full flex px-6 md:px-32 lg:px-40 overflow-hidden text-2xl">
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
            <a
              href="https://jate-emporium.herokuapp.com/"
              className="cursor-pointer underline font-bold lg:text-4xl hover:text-gray-400"
            >
              Jate Taco's
            </a>
            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">
              GreenSock (GSAP) Animation, useEffect/useState,<br></br> Parallax
              Scrolling, Tailwind CSS, React.{" "}
            </p>
          </p>
        </div>
      </div>

      <div className="project-container w-full px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
            <a
              href="https://rick3mrtz.github.io/Glassmorphism/"
              className="cursor-pointer underline font-bold lg:text-4xl hover:text-gray-400"
            >
              Glassmorphism
            </a>
            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">
              Practiced w/ Glass CSS Trend, React, Vanilla CSS.{" "}
            </p>
          </p>
        </div>
      </div>

      <div className="project-container w-full px-6 md:px-32 lg:px-40 flex overflow-hidden text-2xl">
        <div className="flex w-full justify-between border-b-2 pb-20 pt-8">
          <p className="jate font-sans text-gray-600 lg:tracking-widest">
            <div className="cursor-not-allowed font-bold lg:text-4xl underline">
              QuikList iOS Application
            </div>
            <p className="tracking-normal text-gray-400 h-full flex justify-start items-end text-xl">
              *WORK IN PROGRESS* <br></br>Converting my QuikList website into an iOS
              Application using Expo with React-Native{" "}
            </p>
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-start">
        <p className="projects font-sans text-gray-400 tracking-widest pt-14 pb-12 mx-20 text-4xl">
          Currently
        </p>
        <p className="current flex flex-col pb-10 px-6 md:px-32 lg:px-40 w-full lg:text-2xl lg:leading-loose md:leading-loose leading-9 md:text-xl sm:text-[14px] text-gray-500 list-none">
          <li>- Taking TypeScript and UX/UI courses</li>
          <li>- Always looking for new Animation Libraries</li>
          <li>- Developing my QuikList Application for iOS</li>
          <li>
            - Looking forward to collaborating with a<br></br>Creative and
            Innovative Development team!
          </li>
        </p>
      </div>
    </>
  );
}

export default Projects;


