import  { useState } from 'react';
import { motion, useDragControls } from 'motion/react'; 
import useStore from '../store/feature'; 
import Skills from './Skills';

export default function Chrome() {
  const clearActiveComponent = useStore((state: any) => state.clearActiveComponent); 
  const [fullScreen, setFullScreen] = useState<boolean>(false); 

  const controls = useDragControls();

  const [activeCom, setActiveCom] = useState<string>("Me");

  function Me(){
    return (
      <div className='text-white w-full h-full'>
        <section className="h-full text-white p-8 overflow-hidden">
          {/* Left Section: Text and Buttons */}
          <div className="flex flex-col justify-center w-full items-center text-center p-4">
            <motion.img src="/Aryan.jpeg" whileHover={{scale:1.2}} className='rounded-full w-32' alt="" />
            <p className="text-2xl font-light py-2">Hi, I am</p>
            <h1 className="text-7xl font-bold pb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Aryan Bola
            </h1>
            <ul className="text-3xl font-light space-y-2 pb-8">
              <li>Full Stack Developer</li>
              <li>Designer</li>
              <li>Cracked Dev</li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
  
  function Projects(){

    interface iprojectCard {
      imageSrc:string,
      title:string,
      description:string,
      badges:string[]
    }

      const projects = [
      {
        id: 1,
        imageSrc: "https://placehold.co/300x200/4F46E5/FFFFFF?text=Project+One", // Placeholder image
        title: "E-commerce Platform Redesign",
        description: "A complete overhaul ",
        badges: ["ReactJs", "NextJs", "Tailwind", "MongoDB", "NodeJS", "ExpressJS"],
      },
      {
        id: 2,
        imageSrc: "https://placehold.co/300x200/10B981/FFFFFF?text=Project+Two", // Another placeholder
        title: "Real-time Chat Application",
        description: "Developed a real-time chat application with user authentication, private messaging, and group chat functionalities. Utilized WebSockets for instant message delivery and a robust backend for message persistence.",
        badges: ["ReactJs", "TypeScript", "NodeJS", "Socket.io", "PostgreSQL"],
      },
      {
        id: 3,
        imageSrc: "https://placehold.co/300x200/F97316/FFFFFF?text=Project+Three", // Another placeholder
        title: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. Features smooth animations, a responsive layout, and a contact form.",
        badges: ["NextJs", "Tailwind", "Framer Motion", "Vercel"],
      },
      {
        id: 4,
        imageSrc: "https://placehold.co/300x200/F97316/FFFFFF?text=Project+Three", // Another placeholder
        title: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. Features smooth animations, a responsive layout, and a contact form.",
        badges: ["NextJs", "Tailwind", "Framer Motion", "Vercel"],
      },
    ];

  // Inner component for a single project card display
    const SingleProjectCard = ({ imageSrc, title, description, badges }:iprojectCard) => {
      return (
        <div className="flex flex-col border rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          {/* Image Section (Left) */}
          <div className="w-full">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 md:h-full object-cover rounded-t-xl"
            />
          </div>

          {/* Content Section (Right) */}
          <div className="w-full p-2 flex flex-col justify-between">
            <div className='text-white'>
              <h3 className="text-2xl font-bold pb-2">{title}</h3>
              <p className="text-base leading-relaxed pb-4">
                {description}
              </p>
            </div>

            {/* Badges Section */}
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className=" p-4 sm:p-8 flex items-center justify-center font-sans">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
          {/* Map through projects and render SingleProjectCard for each */}
          <div className='grid grid-cols-2 gap-8'>
            {projects.map((project) => (
              <SingleProjectCard
                key={project.id}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                badges={project.badges}
              />
            ))}
          </div>
        </div>
      </div>
      )
  }
  function Blogs(){
    interface iprojectCard {
      imageSrc:string,
      title:string,
      description:string,
      badges:string[]
    }

      const projects = [
      {
        id: 1,
        imageSrc: "https://placehold.co/300x200/4F46E5/FFFFFF?text=Project+One", // Placeholder image
        title: "E-commerce Platform Redesign",
        description: "A complete overhaul ",
        badges: ["ReactJs", "NextJs", "Tailwind", "MongoDB", "NodeJS", "ExpressJS"],
      },
      {
        id: 2,
        imageSrc: "https://placehold.co/300x200/10B981/FFFFFF?text=Project+Two", // Another placeholder
        title: "Real-time Chat Application",
        description: "Developed a real-time chat application with user authentication, private messaging, and group chat functionalities. Utilized WebSockets for instant message delivery and a robust backend for message persistence.",
        badges: ["ReactJs", "TypeScript", "NodeJS", "Socket.io", "PostgreSQL"],
      },
      {
        id: 3,
        imageSrc: "https://placehold.co/300x200/F97316/FFFFFF?text=Project+Three", // Another placeholder
        title: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. Features smooth animations, a responsive layout, and a contact form.",
        badges: ["NextJs", "Tailwind", "Framer Motion", "Vercel"],
      },
      {
        id: 4,
        imageSrc: "https://placehold.co/300x200/F97316/FFFFFF?text=Project+Three", // Another placeholder
        title: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. Features smooth animations, a responsive layout, and a contact form.",
        badges: ["NextJs", "Tailwind", "Framer Motion", "Vercel"],
      },
    ];

    // Inner component for a single project card display
    const SingleProjectCard = ({ imageSrc, title, description, badges }:iprojectCard) => {
      return (
        <div className="flex flex-col border rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          {/* Image Section (Left) */}
          <div className="w-full">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 md:h-full object-cover rounded-t-xl"
            />
          </div>

          {/* Content Section (Right) */}
          <div className="w-full p-2 flex flex-col justify-between">
            <div className='text-white'>
              <h3 className="text-2xl font-bold pb-2">{title}</h3>
              <p className="text-base leading-relaxed pb-4">
                {description}
              </p>
            </div>

            {/* Badges Section */}
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    };

  return (
    <div className=" p-4 sm:p-8 flex items-center justify-center font-sans">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
        {/* Map through projects and render SingleProjectCard for each */}
        <div className='grid grid-cols-2 gap-8'>
          {projects.map((project) => (
            <SingleProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              badges={project.badges}
            />
          ))}
        </div>
      </div>
    </div>
    )
  }
  
  function Designs(){
    interface iprojectCard {
      imageSrc:string,
      title:string,
      description:string,
      badges:string[]
    }

      const projects = [
      {
        id: 1,
        imageSrc: "https://placehold.co/300x200/4F46E5/FFFFFF?text=Project+One", // Placeholder image
        title: "E-commerce Platform Redesign",
        description: "A complete overhaul ",
        badges: ["ReactJs", "NextJs", "Tailwind", "MongoDB", "NodeJS", "ExpressJS"],
      },
      {
        id: 2,
        imageSrc: "https://placehold.co/300x200/10B981/FFFFFF?text=Project+Two", // Another placeholder
        title: "Real-time Chat Application",
        description: "Developed a real-time chat application with user authentication, private messaging, and group chat functionalities. Utilized WebSockets for instant message delivery and a robust backend for message persistence.",
        badges: ["ReactJs", "TypeScript", "NodeJS", "Socket.io", "PostgreSQL"],
      },
      {
        id: 3,
        imageSrc: "https://placehold.co/300x200/F97316/FFFFFF?text=Project+Three", // Another placeholder
        title: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. Features smooth animations, a responsive layout, and a contact form.",
        badges: ["NextJs", "Tailwind", "Framer Motion", "Vercel"],
      },
      {
        id: 4,
        imageSrc: "https://placehold.co/300x200/F97316/FFFFFF?text=Project+Three", // Another placeholder
        title: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. Features smooth animations, a responsive layout, and a contact form.",
        badges: ["NextJs", "Tailwind", "Framer Motion", "Vercel"],
      },
    ];

    // Inner component for a single project card display
    const SingleProjectCard = ({ imageSrc, title, description, badges }:iprojectCard) => {
      return (
        <div className="flex flex-col border rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          {/* Image Section (Left) */}
          <div className="w-full">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 md:h-full object-cover rounded-t-xl"
            />
          </div>

          {/* Content Section (Right) */}
          <div className="w-full p-2 flex flex-col justify-between">
            <div className='text-white'>
              <h3 className="text-2xl font-bold pb-2">{title}</h3>
              <p className="text-base leading-relaxed pb-4">
                {description}
              </p>
            </div>

            {/* Badges Section */}
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    };

  return (
    <div className=" p-4 sm:p-8 flex items-center justify-center font-sans">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
        {/* Map through projects and render SingleProjectCard for each */}
        <div className='grid grid-cols-2 gap-8'>
          {projects.map((project) => (
            <SingleProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              badges={project.badges}
            />
          ))}
        </div>
      </div>
    </div>
    )
  }

  function ContactMe(){
    return (
      <div></div>
    )
  }

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      className={`z-10 ${
        fullScreen ? "w-full h-full absolute inset-0" : "w-[60%] h-[70%]"
      } flex flex-col rounded-lg overflow-hidden shadow-xl bg-gray-800`}
    >
      {/* Title Bar */}
      <div onPointerDown={event => controls.start(event)} className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-700 bg-gray-700"> {/* Adjusted border and bg color */}
        <div className="flex items-center gap-3">
          <button className="w-4 h-4 flex items-center justify-center text-gray-300"> {/* Adjusted text color */}
            <img src="/leftArrow.png" alt="Back" />
          </button>
          <p className="text-sm font-medium text-gray-100">Aryan Bola</p> {/* Adjusted text color */}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4"
            title="Minimize"
          >
            <img src="/minus.png" alt="Minimize" />
          </button>
          <button
            onClick={() => setFullScreen((prev) => !prev)}
            className="w-3 h-3"
            title={fullScreen ? "Restore Down" : "Maximize"}
          >
            <img src="/square.png" alt="Maximize/Restore" />
          </button>
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4 hover:bg-red-500 rounded-sm" // Added rounded-sm for better hover effect
            title="Close"
          >
            <img src="/close.png" alt="Close" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className='flex h-full w-full'>
        <div className='w-[20%] border-r text-white p-2 flex flex-col gap-2'>
          <button className='px-4 py-2 border rounded-xl hover:bg-black active:bg-gray-900' onClick={()=>setActiveCom('Me')}>Me</button>
          <button className='px-4 py-2 border rounded-xl hover:bg-black active:bg-gray-900' onClick={()=>setActiveCom('Skills')}>Skills</button>
          <button className='px-4 py-2 border rounded-xl hover:bg-black active:bg-gray-900' onClick={()=>setActiveCom('Projects')}>Projects</button>
          <button className='px-4 py-2 border rounded-xl hover:bg-black active:bg-gray-900' onClick={()=>setActiveCom('Blogs')}>Blogs</button>
          <button className='px-4 py-2 border rounded-xl hover:bg-black active:bg-gray-900' onClick={()=>setActiveCom('Designs')}>Designs</button>
          <button className='px-4 py-2 border rounded-xl hover:bg-black active:bg-gray-900' onClick={()=>setActiveCom('ContactMe')}>Contact Me</button>
        </div>
        <div className='flex-1 overflow-y-auto p-2'>
          {activeCom === "Me" && <Me />}
          {activeCom === "Skills" && <Skills />}
          {activeCom === "Projects" && <Projects />}
          {activeCom === "Designs" && <Designs />}
          {activeCom === "Blogs" && <Blogs />}
          {activeCom === "ContactMe" && <ContactMe />}
        </div>
      </div>
    </motion.div>
  );
}
