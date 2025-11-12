import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-[100vh] px-6 overflow-hidden bg-[#0C2B4E]">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <SiReact className="floating-icon text-sky-400 left-[10%] top-[20%]" />
        <SiJavascript className="floating-icon text-yellow-400 left-[70%] top-[10%]" />
        <SiTailwindcss className="floating-icon text-cyan-500 left-[80%] top-[60%]" />
        <SiNodedotjs className="floating-icon text-green-500 left-[20%] top-[70%]" />
        <SiTypescript className="floating-icon text-blue-600 left-[45%] top-[40%]" />
      </div>

      {/* Hero Content */}
      <h1 className="text-4xl md:text-6xl font-bold text-[#f4f4f4] drop-shadow-sm relative z-10">
        Iman Rao
      </h1>
      <p className="text-lg md:text-xl text-blue-600 font-medium mt-2 relative z-10">
        Frontend Developer
      </p>
      <p className="max-w-2xl mt-4 text-gray-200 leading-relaxed relative z-10">
        I build exceptional and accessible digital experiences for the web.
        Focused on creating elegant solutions to complex problems.
      </p>
    </section>
  );
}

