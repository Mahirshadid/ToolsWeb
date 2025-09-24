import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import heroimg from "./assets/hero.jpg"
import daisyuimg from './assets/daisyui.png'
import firebaseimg from './assets/firebase.jpg'
import gitimg from './assets/git.jpg'
import htmlcss from './assets/htmlcss.png'
import jsimg from './assets/JavaScript.png'
import mongoimg from './assets/mongo.png'
import nodeimg from './assets/node.png'
import tailwindimg from './assets/tailwind.jpeg'
import reactimg from './assets/reactimg.png'

function App() {

  const topic = useRef(null);

  const handscroll = () => {
    topic.current.scrollIntoView({behavior:"smooth"});
  }

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroimg}
            className="w-32 sm:w-1/2 md:w-2/3 lg:w-96 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Tools and Technologies for Internet Programming
            </h1>
            <p className="py-6 text-balance">
              In this course, we'll dive into the cool tools, tricks, and
              technologies that make the internet run. From building websites to
              exploring modern web frameworks, you'll get hands-on experience
              and practical skills to create awesome online applications. Let's
              get started!
            </p>
            <button className="btn btn-primary" onClick={handscroll}>Get Started</button>
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
              web applications. <i>(Swipe the images to find out the Topics)</i>
            </p>
          </div>

          <div className="carousel rounded-box w-64 sm:w-96 border-2 border-blue-300 shadow-lg">
            <div className="carousel-item">
              <img src={htmlcss} alt="1" />
            </div>
            <div className="carousel-item">
              <img src={jsimg} alt="2" />
            </div>
            <div className="carousel-item">
              <img src={tailwindimg} alt="3" />
            </div>
            <div className="carousel-item">
              <img src={gitimg} alt="4" />
            </div>
            <div className="carousel-item">
              <img src={firebaseimg} alt="5" />
            </div>
            <div className="carousel-item">
              <img
                src={daisyuimg}
                alt="6"
              />
            </div>
            <div className="carousel-item">
              <img
                src={mongoimg}
                alt="7"
              />
            </div>
            <div className="carousel-item">
              <img
                src={nodeimg}
                alt="8"
              />
            </div>
            <div className="carousel-item">
              <img
                src={reactimg}
                alt="9"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
