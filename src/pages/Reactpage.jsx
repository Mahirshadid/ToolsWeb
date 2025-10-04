import React from "react";
import Marquee from "react-fast-marquee";

const Reactpage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
            <a  className="link-hover" href="https://vite.dev/guide/" target="_blank">
              Introduction to React-Vite
            </a>
          </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Setting up the development environment</li>
          <li>Introduction to Vite React App</li>
          <li>Introduction to React Components</li>
          <li>JSX and rendering elements</li>
          <li>Discussion about props and state</li>
          <li>Building your first React component</li>
          <li>useState, useEffect, useRef</li>
          <li>useEffect and useContext</li>
          <li>Building React component using hooks above</li>
          <li>Discuss about elements of React Router</li>
          <li>Setting up React Router</li>
          <li>Navigating between pages using React Router</li>
          <li>Creating a multi-page React application</li>
          <li>react-reveal</li>
          <li>react-fast-marquee</li>
        </ul>
      </div>
    </div>
  );
};

export default Reactpage;
