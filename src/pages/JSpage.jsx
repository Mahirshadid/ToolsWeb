import React from "react";

const JSpage = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-col items-center max-w-3xl">
        <h3 className="text-4xl font-bold text-center hover:text-cyan-400">
          <a href="https://www.w3schools.com/js/default.asp" target="_blank">
            Introduction to JavaScript
          </a>
        </h3>
        <ul className="flex flex-col items-center text-center" id="inner_lists">
          <li>JavaScript Basics</li>
          <li>JavaScript Control Flow Statements</li>
          <li>JavaScript Loops</li>
          <li>JavaScript Objects</li>
          <li>JavaScript Functions</li>
          <li>ES6 features: let, const, var, arrow functions, etc.</li>
          <li>Understanding the Document Object Model (DOM)</li>
          <li>Selecting and manipulating DOM elements</li>
          <li>Introduction to Event handling and listeners</li>
          <li>Updating the DOM in response to user actions</li>
          <li>Creating a project by using DOM event listeners</li>
        </ul>
      </div>
    </div>
  );
};

export default JSpage;
