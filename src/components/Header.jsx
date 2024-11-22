import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white border border-gray-600 rounded-3xl mx-6 p-3 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
        </div>

        {/* Center
        <div className="hidden sm:block w-12 h-12 border border-gray-500 rounded-full">
          {/* Placeholder for Image */}
        {/* </div> */} *

        {/* Right Side */}
        <div className="hidden sm:flex space-x-6">
          <a href="#articles" className="hover:underline">Articles</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#resume" className="hover:underline">Resume</a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-3 flex flex-col items-center space-y-3 sm:hidden">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#articles" className="hover:underline">Articles</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#resume" className="hover:underline">Resume</a>
        </div>
      )}
    </header>
  );
}

export default Header;
