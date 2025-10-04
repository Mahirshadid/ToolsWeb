import React from 'react'
import Marquee from 'react-fast-marquee'

const APIpage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
          <a className="link-hover" href="https://www.w3schools.com/js/js_api_web_storage.asp" target="_blank">
            Introduction to API
          </a>
        </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Fetching and integrating APIs</li>
          <li>Creating an e-commerce project by using API and DOM</li>
        </ul>
      </div>
    </div>
  )
}

export default APIpage