import React from "react";

function Blog() {
  return (
    <section id="blog" className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <p className="text-lg text-gray-700">
          Read my articles on Medium and stay updated with my thoughts on Web2, Web3, and blockchain.
        </p>
        <a
          href="https://medium.com/@yourusername"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Visit My Blog
        </a>
      </div>
    </section>
  );
}

export default Blog;
