import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Fade } from "react-awesome-reveal";

import heroimg from "../assets/hero.jpg"
import daisyuimg from '../assets/daisyui.png'
import firebaseimg from '../assets/firebase.jpg'
import gitimg from '../assets/git.jpg'
import htmlcss from '../assets/htmlcss.png'
import jsimg from '../assets/JavaScript.png'
import mongoimg from '../assets/mongo.png'
import nodeimg from '../assets/node.png'
import tailwindimg from '../assets/tailwind.jpeg'
import reactimg from '../assets/reactimg.png'

const images = [
  htmlcss,
  jsimg,
  tailwindimg,
  gitimg,
  firebaseimg,
  daisyuimg,
  mongoimg,
  nodeimg,
  reactimg,
];

const Homepage = () => {
    const topic = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


    const handscroll = () => {
        topic.current.scrollIntoView({behavior:"smooth"});
    }

    useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
    }, []);
    
  
    return (
    <>
    
      <div className="hero min-h-screen" id='home'>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroimg}
            className="w-32 sm:w-1/2 md:w-2/3 lg:w-96 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              <Fade>Tools and Technologies for Internet Programming</Fade>
            </h1>
            <p className="py-6 text-balance">
              <Fade>
                  In this course, we'll dive into the cool tools, tricks, and
                technologies that make the internet run. From building websites to
                exploring modern web frameworks, you'll get hands-on experience
                and practical skills to create awesome online applications. Let's
                get started!
              </Fade>
            </p>
            <button className="btn btn-primary" onClick={handscroll}>Get Started</button>
            <button className="btn btn-success ml-4 text-amber-50"> 
              <a href='./public/files/CSE-3532-LECTURE- PLAN (Updated).pdf'
              target="_blank"
              rel="noopener noreferrer">View Lecture Plan</a> 
            </button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-blue-50" ref={topic}>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-left max-w-lg">
            <h1 className="text-3xl sm:text-5xl font-bold text-black">
              What we have here?
            </h1>
            <p className="py-6 text-black">
              Explore the tools, frameworks, and techniques that power modern
              web applications.
            </p>
          </div>

          <div className="carousel rounded-box w-auto sm:w-lg border-2 border-blue-300 shadow-lg overflow-hidden">
            {images.map((img, i) => (
              <div
                key={i}
                className={`carousel-item transition-transform duration-700 ease-in-out w-full 
                h-auto
                ${i === activeIndex ? "block" : "hidden"}`}
              >
                <img src={img}
                     alt={`topic-${i}`}
                     className="w-full h-auto sm:h-full object-contain sm:object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage