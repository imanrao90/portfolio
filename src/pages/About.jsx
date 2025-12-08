import React from 'react';
import Section from '../components/Section';
import { EXPERIENCES } from '../data/constants';
import { GraduationCap, Briefcase } from 'lucide-react';

function About() {
  return (
    <div className="pt-10">
      {/* Intro */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-blue-100">
              <img
                src="https://picsum.photos/800/800?random=10"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full -z-10" />
        </div> */}

          <div>
            <h1 className="text-4xl font-bold text-blue-950 mb-6">About Me</h1>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Hello! I'm a passionate Frontend Developer with a keen eye for design and a drive to create seamless digital experiences.
              </p>
              <p className="mb-4">
                My journey began when I edited my first HTML file to change the background color of a webpage. Since then, I've been hooked on the infinite possibilities of web development. I've spent hundreds of hours mastering JavaScript, React, and the ecosystem surrounding them.
              </p>
              <p>
                When I'm not coding, you can find me exploring new UI trends, contributing to open source, or hiking. I believe in continuous learning and am eager to apply my skills in a professional environment.
              </p>
            </div>
          </div>
        </div>
      </Section >

      {/* Experience & Education */}
      <Section Section bgColor="light" >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">Journey So Far</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-accent" size={28} />
                <h3 className="text-2xl font-bold text-blue-950">Experience</h3>
              </div>

              <div className="space-y-8 border-l-2 border-blue-100 pl-8 ml-3">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative">
                    <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-blue-950" />
                    <h4 className="text-lg font-bold text-blue-950">{exp.role}</h4>
                    <span className="text-sm font-medium text-accent block mb-2">{exp.company} • {exp.period}</span>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-accent" size={28} />
                <h3 className="text-2xl font-bold text-blue-950">Education</h3>
              </div>

              <div className="space-y-8 border-l-2 border-blue-100 pl-8 ml-3">
                <div className="relative">
                  <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-blue-950" />
                  <h4 className="text-lg font-bold text-blue-950">BS in Computer Science</h4>
                  <span className="text-sm font-medium text-accent block mb-2">University of Technology • 2020 - 2024</span>
                  <p className="text-gray-600 text-sm">Focused on Web Development, Algorithms, and Human-Computer Interaction.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-blue-950" />
                  <h4 className="text-lg font-bold text-blue-950">Full Stack Certification</h4>
                  <span className="text-sm font-medium text-accent block mb-2">Online Bootcamp • 2022</span>
                  <p className="text-gray-600 text-sm">Intensive 12-week program covering React, Node.js, and Database management.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section >
    </div >
  );
}

export default About;
