import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-blue-100 max-w-xs">
              Building digital experiences with clean code and modern design.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-100 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-100 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-100 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Twitter size={24} />
            </a>
            <Link
              to="/contact"
              className="text-blue-100 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100/60">
          <p>© {currentYear} Iman Rao. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
