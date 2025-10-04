import React from "react";
import Marquee from "react-fast-marquee";

const Csspage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee className="w-full">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
          <a className="link-hover" href="https://www.w3schools.com/css/" target="_blank">
            Introduction to CSS
          </a>
        </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Different ways of using CSS</li>
          <li>CSS Fundamentals</li>
          <li>CSS Styling Techniques</li>
          <li>CSS Box Model</li>
          <li>Flexbox and Grid layouts</li>
          <li>CSS Transform, Transition, Animation etc.</li>
          <li>CSS Responsive Design and Media Queries</li>
          <li>Creating a responsive webpage with Flexbox and Grid layout</li>
        </ul>
      </div>
    </div>
  );
};

export default Csspage;
