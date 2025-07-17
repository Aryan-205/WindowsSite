import { BiLogoPostgresql } from "react-icons/bi"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt, FaGithub } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiCanvas,
  SiExpress,
  SiFigma,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
} from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
} from "react-icons/tb"


export default function Skills(){

    const skills = [
      // { id: 1, icon: <RiHtml5Fill />, text: "HTML" },
      // { id: 2, icon: <FaCss3Alt />, text: "CSS" },
      { id: 1, icon: <RiReactjsLine />, text: "ReactJs" },
      { id: 2, icon: <RiNextjsLine />, text: "NextJs" },
      { id: 3, icon: <DiJavascript />, text: "JavaScript" },
      { id: 4, icon: <TbBrandTypescript />, text: "TypeScript" },
      { id: 5, icon: <RiTailwindCssFill />, text: "Tailwind" },
      { id: 6, icon: <SiShadcnui />, text: "shadcn" },
      { id: 7, icon: <TbBrandFramerMotion />, text: "Framer Motion" },
      { id: 8, icon: <SiGreensock />, text: "GSAP" },
      { id: 9, icon: <IoLogoNodejs />, text: "NodeJS" },
      { id: 10, icon: <SiExpress />, text: "ExpressJS" },
      { id: 11, icon: <SiPostman />, text: "Postman" },
      { id: 12, icon: <BiLogoPostgresql />, text: "PostgreSQL" },
      { id: 13, icon: <SiMongodb />, text: "MongoDB" },
      { id: 14, icon: <FaGitAlt />, text: "Git" },
      { id: 15, icon: <FaGithub />, text: "GitHub" },
      { id: 18, icon: <TbBrandCpp />, text: "C++" },
      { id: 20, icon: <SiVercel />, text: "Vercel" },
      { id: 21, icon: <SiFigma />, text: "Figma" },
      { id: 22, icon: <SiCanvas />, text: "Canvas" },
    ]
    return (
      <div className='text-white w-full h-auto p-4'>
        <p className="text-4xl font-semibold">Skills</p>
        <div className="py-4 text-xl text-white/80">
          <p>&#8226; I learn what I don't know</p>
          <div className="flex">
          <p>&#8226;</p>
          <p> My area of expertise are <span className="font-bold text-white">Frontend, Backend, Designing, Web Applications</span></p>
          </div>
          <p>&#8226; Here's my tech stack : </p>
        </div>
        <div className="flex flex-wrap gap-4 ">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-row h-fit gap-1 rounded-md justify-center items-center font-medium w-fit py-1 px-3 dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 cursor-pointer transition-all"
            >
              {skill.icon}
              {skill.text}
            </div>
          ))}
        </div>
      </div>
    )
  }