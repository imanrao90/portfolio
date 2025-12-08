import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiTypescript } from 'react-icons/si';
import { projectsImages } from './projectsImages';
import project2 from '../assets/images/projects/project2.png'
import project3 from '../assets/images/projects/project3.png'
import project4 from '../assets/images/projects/project4.png'
import project5 from '../assets/images/projects/project5.png'
import project6 from '../assets/images/projects/project6.png'
import project7 from '../assets/images/projects/project7.png'

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

// Skills
export const SKILLS = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, category: 'frontend' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, category: 'frontend' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, category: 'frontend' },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, category: 'frontend' },
  // { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, category: 'frontend' },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, category: 'tools' },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800" />, category: 'tools' },
  { name: 'Vite', icon: <SiVite className="text-purple-500" />, category: 'tools' },
];

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: 'Project Management',
    description: 'Project management app where teams collaborate in shared workspaces, track progress, chat, and manage tasks assigned by an admin. It helps teams stay organized and work together easily.',
    tags: ['React JS', 'Clerk', 'Tailwind', 'Inngest'],
    githubLink: 'https://github.com/imanrao90/project-management-frontend',
    demoLink: 'https://projectly-dashboard.vercel.app',
    image: project5,
    featured: false,
  },
  {
    id: 4,
    title: 'Doctor Appointment',
    description: 'Doctor Appointment app where users can make an account and easily book doctors anytime. It helps people schedule visits quickly and stay organized.',
    tags: ['React JS', 'Tailwind CSS', 'Mongo DB'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: project4,
    featured: true,
  },
  {
    id: 5,
    title: 'Doctor Appointment Admin',
    description: 'An admin panel of Doctor Appointment where the admin can add doctors, view recent bookings, and manage all doctors and patients with their information.',
    tags: ['React JS', 'Tailwind CSS', 'Mongo DB'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: project6,
    featured: false,
  },
  // {
  //   id: 6,
  //   title: 'Hotel Booking',
  //   description: 'Search for thousands of recipes based on ingredients you have at home.',
  //   tags: ['React JS', 'Tailwind CSS', 'Mongo DB'],
  //   githubLink: 'https://github.com',
  //   demoLink: 'https://example.com',
  //   image: project7,
  //   featured: false,
  // },
  // {
  //   id: 2,
  //   title: 'Task Management App',
  //   description: 'A Kanban-style task manager featuring drag-and-drop functionality and local storage persistence.',
  //   tags: ['React JS',],
  //   githubLink: 'https://github.com',
  //   demoLink: 'https://example.com',
  //   image: project3,
  //   featured: true,
  // },
  {
    id: 3,
    title: 'Blog Post',
    description: 'A basic blog app where users can write and publish their own blog posts. It’s a clean and straightforward platform focused only on creating and sharing posts.',
    tags: ['React JS'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: project2,
    featured: true,
  },
];

// Experiences
export const EXPERIENCES = [
  {
    id: 1,
    role: 'Frontend Intern',
    company: 'Tech Startup Inc.',
    period: 'Jan 2024 - Present',
    description: 'Assisted in developing responsive UI components using React and Tailwind CSS. Collaborated with the design team to implement pixel-perfect layouts.',
  },
  {
    id: 2,
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: 'Jun 2023 - Dec 2023',
    description: 'Built custom landing pages for local businesses, focusing on SEO and performance optimization.',
  },
];
