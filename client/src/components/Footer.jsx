import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white border border-gray-600 rounded-3xl mx-6 p-3 mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side */}
        <div>
          <p className="text-center sm:text-left">
            &copy; 2024 Qadir Adesoye. All Rights Reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-6 mt-3 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
