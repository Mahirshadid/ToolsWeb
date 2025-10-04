import React from 'react'
import Marquee from 'react-fast-marquee'

const Githubpage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee className='w-full'>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
          <a className="link-hover" href="https://www.w3schools.com/git/" target="_blank">
            Introduction to Version Control with Git and Github
          </a>
        </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Creating procedure of github and git </li>
          <li>Practice github operation</li>
        </ul>
      </div>
    </div>
  )
}

export default Githubpage