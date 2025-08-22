import { motion } from 'motion/react'
import React, { useState } from 'react';
import { CodeIcon, DatabaseIcon, ServerIcon, DesignIcon } from './SkillOrb';
import useStore from '../store/feature';

export default function Me() {

  const clearActiveComponent = useStore(set=>set.clearActiveComponent)

  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Web Development', icon: CodeIcon, color: 'bg-emerald-500',subskills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript','Typescript', 'HTML', 'CSS', 'Express', 'NodeJs', 'WebSocket'] },
    { name: 'UI/UX Design', icon: DesignIcon, color: 'bg-amber-500',  subskills: ['Figma', 'Motion', 'GSAP', 'ThreeJS', 'Canvas', 'Blender', 'Prototyping'] },
    { name: 'Database Management', icon: DatabaseIcon, color: 'bg-rose-500', subskills: ['MongoDB', 'PostgreSQL', "Prisma",'SQL', 'Firebase','Zod', 'Zustand','Redux']  },
    { name: 'DevOps', icon: ServerIcon, color: 'bg-cyan-500', subskills: ['Git/Github', 'Docker', 'TurboRepo','AWS','C++', 'Python-basics'] },
  ];

  const projects = [
    {
      title: 'Apple Bento Grid',
      description: 'A responsive web application built with React and Tailwind CSS.',
      image: '/AppleBentoGrid.jpeg',
      githubUrl: "https://github.com/Aryan-205/WindowsSite",
      liveUrl: "https://windows-site-gq1x.vercel.app/",
    },
    {
      title: 'Windows OS',
      subheading:"A Windows OS inside your browser",
      description: 'A mobile app UI/UX design prototype created using Figma.',
      image: '/WindowsClone.png',
      githubUrl: "https://github.com/Aryan-205/WindowsSite",
      liveUrl: "https://windows-site-gq1x.vercel.app/",
    },
    {
      title: 'ExcaliDraw',
      subheading:"A Windows OS inside your browser",
      description: 'An e-commerce platform with a Node.js backend and MongoDB.',
      image: '/ExcaliDraw.jpg',
      githubUrl: "https://github.com/Aryan-205/WindowsSite",
      liveUrl: "https://windows-site-gq1x.vercel.app/",
    },
    {
      title: 'Rento',
      subheading: "A Luxury Car Rental Platform",
      description: 'A modern rental platform with clean ui and booking capabilities.',
      image: '/Rento.png',
      link: 'https://rento-beta.vercel.app/',
      githubUrl: "https://github.com/Aryan-205/Rento",
    },
  ];

  const designs = [
    {
      image: "/rotating.png",
      title: "Planetary Orbits",
      description: "planets spinning in a orbit, made using keyframes in css",
    },
    {
      image: "/Figma.png",
      title: "My Designs",
      description: "A few Designs from my Figma file",
    },
    {
      image: "/3DButton.png",
      title: "3D-Button",
      description: "3D Button made with motion/react and tailwindcss",
    },
    {
      image: "/MyDesign.png",
      title: "Landing Page",
      description: "An stunning landing page",
    },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Motion Variants
  const parentVariants = {
    initial: {},
    hover: {},
  };

  const firstChild = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -100, opacity: 0 }, 
  };

  const secondChild = {
    initial: { y: 100, opacity: 0 }, 
    hover: { y: 0, opacity: 1 },     
  };

  return (
    <>
      <div
        className="z-10 w-[80%] h-[80%] flex flex-col rounded-lg shadow-xl bg-black text-slate-300 font-inter overflow-y-auto absolute [box-shadow:inset_0px_0px_200px_1px_rgba(0,0,115,0.2)]"
      >
        <AnimatedBackground/>
        {/* Navigation Bar */}
        <div className='flex justify-center py-4 sticky top-4 z-50 '>
          <nav className="rounded-lg w-fit px-32 py-2 backdrop-blur-md bg-white/10 shadow-lg">
            <div className="flex justify-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  activeSection === 'home' ? 'bg-gradient-to-br from-amber-500 to-amber-900 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  activeSection === 'skills' ? 'bg-gradient-to-br from-amber-500 to-amber-900 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  activeSection === 'projects' ? 'bg-gradient-to-br from-amber-500 to-amber-900 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('designs')}
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  activeSection === 'designs' ? 'bg-gradient-to-br from-amber-500 to-amber-900 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Designs"
              >
                Designs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  activeSection === 'contact' ? 'bg-gradient-to-br from-amber-500 to-amber-900 text-white' : 'hover:bg-slate-800'
                }`}
                aria-label="Contact"
              >
                Email
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
              Hello, I'm <span className=" bg-gradient-to-br from-amber-500 to-amber-900 text-transparent bg-clip-text">Aryan Bola</span>
            </h1>
            <div className='pb-8 flex gap-4'>
              <p className="text-lg sm:text-xl text-gray-300  max-w-2xl animate-fade-in-up delay-200">
                Web Developer
              </p>
              <p className="text-lg sm:text-xl text-gray-300  max-w-2xl animate-fade-in-up delay-200">
                |
              </p>
              <p className="text-lg sm:text-xl text-gray-300  max-w-2xl animate-fade-in-up delay-200">
                UI/UX Designer
              </p>
              <p className="text-lg sm:text-xl text-gray-300  max-w-2xl animate-fade-in-up delay-200">
                |
              </p>
              <p className="text-lg sm:text-xl text-gray-300  max-w-2xl animate-fade-in-up delay-200">
                Cracked Dev
              </p>
            </div>
            <div className="flex space-x-4 animate-fade-in-up delay-400">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="bg-gradient-to-br from-amber-500 to-amber-900 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="border border-amber-600 text-amber-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-amber-600 hover:text-white"
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
                  className="relative w-50 h-80 bg-slate-800/50 border border-white rounded-lg overflow-hidden flex "
                >
                  {/* first child */}
                  <motion.div
                    variants={firstChild}
                    className="absolute flex flex-col items-center justify-center w-full h-full"
                  >
                    <div className={`p-4 rounded-lg mb-4  ${skill.color} shadow-lg`}>
                      <skill.icon /> 
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </motion.div>

                  {/* second child */}
                  <motion.div
                    variants={secondChild}
                    className="absolute flex flex-wrap gap-2 w-full h-full p-4"
                  >
                    {skill.subskills.map((subskill, subIndex) => (
                        <button
                          key={subIndex}
                          className="border border-white rounded-lg px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition-colors w-fit h-fit"
                        >
                          {subskill}
                        </button>
                      ))}
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
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/1e293b/d1d5db?text=Image+Not+Found';
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
                      View Project 
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Design Section */}
          <section
            id="designs"
            className="py-16 sm:py-24 p-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              My Designs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designs.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/1e293b/d1d5db?text=Image+Not+Found';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
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
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Hello! I'm Aryan Bola, a passionate 20-year-old developer and 2nd-year DU student. I'm driven by curiosity and the desire to learn from every interaction, no matter how small.
            </p>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Aryan-205"
                className="text-white hover:text-white transition-colors duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className='w-8 h-8' src="/github.png" alt="" />
              </a>
              <a
                href="https://x.com/BolaJi_69"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className='w-8 h-8' src="/twitterDark.png" alt="" />
              </a>
              <a
                href="mailto:aaryann5002@example.com"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <img className='w-8 h-8' src="/EmailDark.png" alt="" />
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-8 text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Aryan Bola✨.</p>
        </footer>
      </div>
      <div className="fixed inset-0 z-0" onClick={clearActiveComponent}/>
    </>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            top: 0,
            left: `${Math.random() * 100}%`, // random horizontal start
          }}
          animate={{
            y: "100vh", 
            x: `${20 + Math.random() * 50}%`, 
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 12,
            ease: "linear",
          }}
          className="bg-white/50 w-1 h-1  absolute"
        />
      ))}
    </div>
  );
}