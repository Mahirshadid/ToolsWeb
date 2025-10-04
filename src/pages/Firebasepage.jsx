import React from "react";
import Marquee from "react-fast-marquee";

const Firebasepage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <Marquee>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center hover:text-cyan-400">
            <a href="https://firebase.google.com/docs" target="_blank">
              Introduction to Firebase
            </a>
          </h3>
        </Marquee>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>Registration with email and password</li>
          <li>Login with email and password</li>
          <li>Logout</li>
          <li>Login with Google account</li>
          <li>Login with GitHub account</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Firebasepage;
