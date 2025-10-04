import React from 'react'
import Marquee from 'react-fast-marquee'


const Tailwindpsge = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
          <a  className="link-hover" href="https://www.w3schools.com/css/" target="_blank">
            Introduction to TailwindCSS 
          </a>
        </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Overview of utility-first CSS</li>
          <li>Setting up TailwindCSS</li>
          <li>Basic styling with TailwindCSS</li>
          <li>Introduction to tailwind CSS component library like daisy UI</li>
          <li>Building complex components with TailwindCSS</li>
          <li>Rebuilding a CSS project with TailwindCSS and tailwind CSS component library</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Tailwindpsge