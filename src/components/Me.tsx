import {hover, motion} from 'motion/react'
import React from 'react';
import { useState } from 'react';

const GithubIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.309 3.495.997.108-.776.418-1.309.762-1.605-2.665-.299-5.462-1.332-5.462-5.923 0-1.31.465-2.381 1.236-3.221-.124-.30-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.876.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.091 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const EnvelopeIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

// Replaced with inline SVG for FiHome, FiTool, FiFolder, FiMail
const HomeIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const ToolIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.77 3.77a1 1 0 0 0 0 1.4z" />
    <path d="M22.7 2.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 0 1.4l5.3 5.3a1 1 0 0 0 1.4 0l-5-5a1 1 0 0 0 0-1.4z" />
    <path d="M12.917 11.293L8.625 15.586a1 1 0 0 0 0 1.414l5.312 5.312a1 1 0 0 0 1.414 0l4.292-4.292a1 1 0 0 0 0-1.414L14.331 11.293a1 1 0 0 0-1.414 0z" />
    <path d="M5.5 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
  </svg>
);

const FolderIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.793a.5.5 0 0 1 .353.147L12.793 5H20a2 2 0 0 1 2 2z" />
  </svg>
);

const MailIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Replaced with inline SVG for MdOutline*
const DesignServicesIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 3C6.48 3 2 7.48 2 13c0 3.73 2.05 6.91 5.08 8.62L12 18.27l4.92 3.35C19.95 19.91 22 16.73 22 13c0-5.52-4.48-10-10-10zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);

const ComputerIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
  </svg>
);

const PaletteIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.83 5.42L12 9.25l2.83-1.83.92 1.58L12 11.25l-3.75-2.43.92-1.58zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

const StorageIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M2 20h20V4H2v16zm18-4H4v-2h16v2zm0-4H4v-2h16v2zm0-4H4V6h16v2z" />
  </svg>
);

const SettingsIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.09-.73-1.71-1.02l-.35-2.67C15.42 2.45 15.15 2 14.66 2h-4c-.49 0-.77.45-.88 1.13l-.35 2.67c-.62.29-1.19.63-1.71 1.02l-2.49-1c-.23-.09-.5 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.09.73 1.71 1.02l.35 2.67c.11.68.39 1.13.88 1.13h4c.49 0 .77-.45.88-1.13l.35-2.67c.62-.29 1.19-.63 1.71-1.02l2.49 1c.23.09.5 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
  </svg>
);

// Replaced with inline SVG for RiCodeSSlashLine
const CodeIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Replaced with inline SVG for RxLink2
const LinkIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export default function Me() {

  const clearActiveComponent = () => {
    console.log("clearActiveComponent called.");
  };

  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Web Development', icon: <CodeIcon />, color: 'bg-emerald-500' },
    { name: 'UI/UX Design', icon: <DesignServicesIcon />, color: 'bg-amber-500' },
    { name: 'Database Management', icon: <StorageIcon />, color: 'bg-rose-500' },
    { name: 'DevOps', icon: <SettingsIcon />, color: 'bg-cyan-500' },
  ];

  const projects = [
    {
      title: 'Project Alpha',
      description: 'A responsive web application built with React and Tailwind CSS.',
      image: 'https://placehold.co/600x400/1e293b/d1d5db?text=Project+Alpha',
      link: '#',
    },
    {
      title: 'Design Beta',
      description: 'A mobile app UI/UX design prototype created using Figma.',
      image: 'https://placehold.co/600x400/1e293b/d1d5db?text=Design+Beta',
      link: '#',
    },
    {
      title: 'Project Gamma',
      description: 'An e-commerce platform with a Node.js backend and MongoDB.',
      image: 'https://placehold.co/600x400/1e293b/d1d5db?text=Project+Gamma',
      link: '#',
    },
    {
      title: 'Website Delta',
      description: 'A personal blog site built with Next.js and a headless CMS.',
      image: 'https://placehold.co/600x400/1e293b/d1d5db?text=Website+Delta',
      link: '#',
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const parentVariants = {
    initial: {},
    hover: {},
  };

  const firstChild = {
    initial: { y: 0, opacity: 1 },
    hover: { y: 100, opacity: 0 }, // move up + disappear
  };

  const secondChild = {
    initial: { y: -100, opacity: 0 }, // start hidden below
    hover: { y: 0, opacity: 1 },    // move into place
  };
  
  return (
    <>
      <div
        className="z-10 w-[80%] h-[80%] absolute top-[10%] left-[10%] flex flex-col rounded-2xl shadow-x bg-slate-950 text-slate-300 font-inter overflow-y-auto"
      >
        {/* Navigation Bar */}
        <div className='flex justify-center py-4 sticky top-4 z-50 '>
          <nav className="rounded-2xl w-fit px-32 py-2 backdrop-blur-md bg-white/10 shadow-lg">
            <div className="flex justify-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`p-3 rounded-2xl transition-colors duration-300 ${
                  activeSection === 'home' ? 'bg-amber-500 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Home"
              >
                <HomeIcon size={20} />
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`p-3 rounded-2xl transition-colors duration-300 ${
                  activeSection === 'skills' ? 'bg-amber-500 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Skills"
              >
                <ToolIcon size={20} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  activeSection === 'projects' ? 'bg-amber-500 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Projects"
              >
                <FolderIcon size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  activeSection === 'contact' ? 'bg-amber-500 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Contact"
              >
                <MailIcon size={20} />
              </button>
            </div>
          </nav>
        </div>

        {/* Main content sections */}
        <main className="p-4 flex-grow">
          {/* Home/Hero Section */}
          <section
            id="home"
            className="flex flex-col justify-center items-center text-center p-4"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Hello, I'm <span className="text-amber-600">Aryan Bola</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl animate-fade-in-up delay-200">
              A passionate developer and designer creating beautiful, simple, and intuitive digital experiences.
            </p>
            <div className="flex space-x-4 animate-fade-in-up delay-400">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="border border-amber-600 text-amber-400 font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-amber-600 hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="py-16 sm:py-24 p-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              My Skills
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {skills.map((skill, index) => (

                <motion.div
                key={index}
                  variants={parentVariants}
                  initial="initial"
                  whileHover="hover"
                  className="relative w-50 h-80 bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden flex items-center justify-center"
                >
                  {/* first child */}
                  <motion.div
                    variants={firstChild}
                    className="absolute flex flex-col items-center justify-center w-full h-full"
                  >
                    <div className={`p-4 rounded-full mb-4 text-yellow-500 ${skill.color} shadow-lg`}>
                      {React.cloneElement(skill.icon, { size: 36 })}
                    </div>
                    <h3 className="text-xl font-semibold text-yellow-500">{skill.name}</h3>
                  </motion.div>

                  {/* second child */}
                  <motion.div
                    variants={secondChild}
                    className="absolute flex flex-col items-center justify-center w-full h-full"
                  >
                    <button className='border rounded-2xl px-2 py-1'>react</button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="py-16 sm:py-24 p-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              My Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      // Use a fallback image in case the primary one fails
                      onError={(e) => {
                        e.target.onerror = null; // prevents infinite loop
                        e.target.src = 'https://placehold.co/600x400/1e293b/d1d5db?text=Image+Not+Found';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <LinkIcon size={20} className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-16 sm:py-24 p-4 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/yourusername"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={36} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={36} />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <EnvelopeIcon size={36} />
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-8 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
      <div className="w-full h-full" onClick={clearActiveComponent}/>
    </>
  );
}
