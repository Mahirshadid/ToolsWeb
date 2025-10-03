import React from 'react'

const Tailwindpsge = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <h3 className="text-4xl font-bold text-center hover:text-cyan-400">
          <a href="https://www.w3schools.com/css/" target="_blank">
            Introduction to TailwindCSS 
          </a>
        </h3>
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