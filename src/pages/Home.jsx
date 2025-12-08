import Section from "../components/Section";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { SKILLS, PROJECTS } from "../data/constants";
import { ArrowRight, Download } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center pt-28 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-blue-50/60 -skew-x-12 translate-x-40 -z-10 hidden lg:block" />

        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <h1 className="text-[42px] md:text-[68px] font-extrabold text-blue-950 leading-tight mb-7 tracking-tight">
              Frontend Developer <br />
              <span className=" bg-clip-text text-blue-800 to-accent">
                Building the Future
              </span>
            </h1>

            {/* <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Hi, I'm John. I specialize in building responsive, user-friendly
              web applications using React, Tailwind CSS, and modern web
              technologies.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" to="/projects">
                View My Work <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* RIGHT-SIDE FLOATING TECH CLOUD */}
          <div className="hidden lg:grid grid-cols-3 gap-8 pr-16">

            <div className="cloud-icon animate-cloud-1">
              <i className="fa-brands fa-react text-blue-500 text-4xl"></i>
            </div>

            <div className="cloud-icon animate-cloud-2">
              <i className="fa-brands fa-js text-yellow-400 text-4xl"></i>
            </div>

            <div className="cloud-icon animate-cloud-3">
              <i className="fa-brands fa-html5 text-orange-500 text-4xl"></i>
            </div>

            <div className="cloud-icon animate-cloud-4">
              <i className="fa-brands fa-css3-alt text-blue-600 text-4xl"></i>
            </div>

            <div className="cloud-icon animate-cloud-6">
              <i className="fa-brands fa-git-alt text-orange-600 text-4xl"></i>
            </div>

            <div className="cloud-icon animate-cloud-10">
              <SiTailwindcss className="fa-solid fa-code text-blue-700 text-4xl"></SiTailwindcss>
            </div>

          </div>






        </div>
      </section>


      {/* SKILLS SECTION */}
      <Section bgColor="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="font-medium text-blue-950">{skill.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">A selection of my recent work.</p>
          </div>
          <Button
            to="/projects"
            variant="secondary"
            className="hidden md:inline-flex"
          >
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button to="/projects" variant="secondary" fullWidth>
            View All Projects
          </Button>
        </div>
      </Section>

      {/* CALL TO ACTION */}
      <Section bgColor="light" className="text-center">
        <h2 className="text-3xl font-bold text-blue-950 mb-6">
          Ready to collaborate?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm currently looking for internship opportunities where I can
          contribute, learn, and grow. Let's build something amazing together.
        </p>
        <Button to="/contact" variant="primary">
          Get In Touch
        </Button>
      </Section>
    </>
  );
}

export default Home;
