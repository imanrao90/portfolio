import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/constants'

function Projects() {
  return (
    <div className="pt-10">
      <Section className="min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-950 pb-2">My Projects</h1>
          {/* <div className='w-full bg-blue-950 h-0.5'></div> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Projects;
