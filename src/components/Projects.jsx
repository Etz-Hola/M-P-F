import React from "react";

function Projects() {
  const projectList = [
    {
      name: "Ticket Flu",
      description: "An online train ticket booking platform.",
      link: "#",
    },
    {
      name: "Quick Bill",
      description: "A salary and payments management app.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-2 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
