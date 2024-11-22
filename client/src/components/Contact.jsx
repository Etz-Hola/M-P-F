import React, { useState } from "react";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h1 className="text-9xl font-bold tracking-widest">Contact Me</h1>
      </div>

      <div className="relative w-full max-w-4xl bg-gray-800 rounded-3xl shadow-lg p-8">
        {/* Contact Info Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center bg-gray-700 p-4 rounded-lg shadow">
              <FaMapMarkerAlt size={32} className="mb-3 text-green-400" />
              <h3 className="font-semibold text-lg">Address</h3>
              <p>Lagos, Nigeria</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-700 p-4 rounded-lg shadow">
              <FaWhatsapp size={32} className="mb-3 text-green-400" />
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <p>+234 812 345 6789</p>
              <a
                href="https://wa.me/2348123456789" // Replace with your actual WhatsApp link
                className="mt-2 text-green-400 font-semibold flex items-center"
              >
                Impost me <FaArrowRight className="ml-2" />
              </a>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-700 p-4 rounded-lg shadow">
              <FaEnvelope size={32} className="mb-3 text-blue-400" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p>yourname@example.com</p>
              <a
                href="mailto:yourname@example.com" // Replace with your actual email
                className="mt-2 text-blue-400 font-semibold flex items-center"
              >
                Send me mail <FaArrowRight className="ml-2" />
              </a>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-700 p-4 rounded-lg shadow">
              <FaPhoneAlt size={32} className="mb-3 text-yellow-400" />
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+234 123 456 7890</p>
              <a
                href="tel:+2341234567890" // Replace with your actual phone number
                className="mt-2 text-yellow-400 font-semibold flex items-center"
              >
                Call me <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-3/4 sm:w-2/3 p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-green-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-3/4 sm:w-2/3 p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-3/4 sm:w-2/3 p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring focus:ring-yellow-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-1/2 sm:w-1/3 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-sm text-green-400">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
