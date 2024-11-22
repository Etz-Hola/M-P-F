import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Background Title */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h1 className="text-9xl font-bold tracking-widest">Contact Me</h1>
      </div>

      {/* Content Section */}
      <div className="relative w-full max-w-5xl bg-gray-800 rounded-3xl shadow-lg p-8">
        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {/* Address */}
          <div className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg shadow">
            <FaMapMarkerAlt size={32} className="mb-4 text-green-400" />
            <h3 className="font-semibold text-lg">Address</h3>
            <p>Lagos, Nigeria</p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg shadow">
            <FaEnvelope size={32} className="mb-4 text-blue-400" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p>yourname@example.com</p>
          </div>
          {/* Phone */}
          <div className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg shadow">
            <FaPhoneAlt size={32} className="mb-4 text-yellow-400" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>+234 123 456 7890</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
