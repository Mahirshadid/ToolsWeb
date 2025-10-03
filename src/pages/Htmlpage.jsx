import React from 'react'
import Marquee from 'react-fast-marquee'

const Htmlpage = () => {
  return (
    <div className='hero min-h-screen bg-base-300'>
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee className='w-full'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400'>
          <a href='https://www.w3schools.com/html/' target='_blank'>Introduction to HTML</a></h3>
        </Marquee>
        
        
        <ul className='flex flex-col items-center text-center' id='inner_lists'>
            <li>Basics of HTML</li>
            <li>HTML Tags</li>
            <li>HTML Tables</li>
            <li>HTML Lists</li>
            <li>HTML Formatting</li>
            <li>Forms and Input Elements</li>
            <li>Semantic HTML and HTML5 Features</li>
            <li>Creating a form and validating input</li>
            <li>Creating a simple web page using above features</li>
        </ul>
      </div>
        
    </div>
  )
}

export default Htmlpage