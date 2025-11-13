import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiMongodb,
} from "react-icons/si";

function SkillsSection() {
  const skills = [
    // { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
    { name: "React", icon: <SiReact className="text-sky-500 text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-3xl" /> },
    // { name: "Mongo Db", icon: <SiMongodb className="text-green-600 text-3xl" /> },
    // { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white text-3xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    // { name: "Git", icon: <SiGit className="text-orange-500 text-3xl" /> },
  ];

  return (
    <section className="bg-[#d4d6da] py-20 px-6 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
        Skills & Technologies
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#e4e6e9] text-center py-6 px-2 rounded-xl shadow-sm font-medium 
                       hover:bg-blue-50 hover:text-blue-600 transition flex flex-col items-center"
          >
            <div className="mb-2">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;


