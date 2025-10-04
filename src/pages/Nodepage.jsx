import React from "react";
import Marquee from "react-fast-marquee";


const Nodepage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
            <a href="https://www.w3schools.com/nodejs/" target="_blank">
              Introduction to NodeJs and Express
            </a>
          </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Understanding NodeJS and Express Server</li>
          <li>Setting up a NodeJS environment</li>
          <li>Building a basic server with Express</li>
          <li>Middleware and routing</li>
          <li>Introducing cors, nodemon, dotenv etc.</li>
        </ul>
      </div>
    </div>
  );
};

export default Nodepage;
