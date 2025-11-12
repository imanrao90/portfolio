import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-30 px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          About Me
        </h1>
        {/* <p className="text-lg text-gray-600 text-center mb-10">
          A short story about who I am, what I do, and what drives me to keep
          learning and building.
        </p> */}

        {/* Intro */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Hi there! I’m{" "}
            <span className="font-semibold text-blue-600">Iman</span>, a
            passionate{" "}
            <span className="font-semibold text-gray-900">
              Frontend Developer
            </span>{" "}
            who loves turning creative ideas into functional and visually
            appealing web experiences.
          </p>

          <p>
            I specialize in{" "}
            <span className="text-blue-600 font-medium">
              HTML, CSS, JavaScript, React.js, and Tailwind CSS
            </span>
            . I enjoy writing clean, efficient, and maintainable code that helps
            bring beautiful designs to life.
          </p>

          <p>
            Recently, I’ve been expanding my skills by working on{" "}
            <span className="font-medium text-gray-900">
              full-stack projects
            </span>{" "}
            where I’ve explored backend technologies like{" "}
            <span className="text-blue-600 font-medium">MongoDB</span>.
            I’ve also learned about{" "}
            <span className="font-medium text-gray-900">
              TypeScript and Next.js
            </span>
            , and I’m excited to build real-world projects with them soon.
          </p>

          <p>
            My focus is on continuous improvement — learning modern frameworks,
            understanding best practices, and building projects that not only
            work well but also deliver great user experiences. Every project I
            build teaches me something new, and that’s what I love most about
            being a developer.
          </p>

          {/* Philosophy */}
          {/* <div className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "Code is like art — it’s not just about making things work, it’s
            about making them elegant, scalable, and enjoyable to use."
          </div> */}

          <p>
            In the future, I aim to dive deeper into advanced technologies and
            frameworks to become a more versatile developer. I’m also interested
            in exploring backend systems, APIs, and deployment strategies to
            build complete, production-ready web applications.
          </p>

          <p>
            When I’m not coding, I enjoy learning about new tools, reading tech
            articles, and experimenting with small projects that challenge my
            creativity.
          </p>

          {/* Call to Action */}
          <p className="text-center text-gray-800 font-medium mt-8">
            Want to collaborate or just have a friendly chat?{" "}
            <Link
              to="/contact"
              className="text-blue-600 hover:underline font-semibold"
            >
              Let’s connect!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
