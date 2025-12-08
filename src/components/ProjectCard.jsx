import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-blue-950 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors"
          >
            <Github size={18} />
            Code
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:text-blue-700 transition-colors"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
