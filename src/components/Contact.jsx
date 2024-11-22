import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Feel free to reach out for collaborations or freelance work!
        </p>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
