import React from "react";
import projects from "../data/projectsData";
import { Link } from "react-router-dom";

function ProjectsSection({ limit }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      <section className="bg-[#f4f4f4] py-20 px-6 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
          Featured Projects
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <Link
                  to={project.link}
                  target="_blank"
                  className="text-blue-600 font-medium mt-3 inline-block hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;



