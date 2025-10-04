import React from "react";
import Marquee from "react-fast-marquee";

const Mongopage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
            <a href="https://www.w3schools.com/mongodb/" target="_blank">
              Introduction to MongoDB
            </a>
          </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Introduction to MongoDB Atlas</li>
          <li>Creating MongoDB account</li>
          <li>Introduce cloud and local version of MongoDB</li>
          <li>Creating new Database user in MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Mongopage;
