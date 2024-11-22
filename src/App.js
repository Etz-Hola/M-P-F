import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="text-center">
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
