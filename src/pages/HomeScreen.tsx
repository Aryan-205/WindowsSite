import { motion } from "motion/react";
import Taskbar from "../components/Taskbar";
import ActiveComponentRenderer from "../components/RenderTab";

export default function HomeScreen() {
  const t = new Date()

  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full h-screen flex-col justify-between hidden sm:flex">
        {/* main screen */}
        <div className="flex-1 flex justify-center items-center relative h-full" >
          <p className="text-white text-8xl text-center font-semibold absolute top-12 left-[40%]">{t.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p>
          <img src="/wallpaper.webp" className="absolute w-full h-full -z-10" alt="" />
          <div className="w-full h-full flex justify-center items-center">
            <ActiveComponentRenderer/>
          </div>
        </div>
        {/* taskbar */}
        <Taskbar/>
      </motion.div>
      {/* small screen block */}
      <div className="bg-black flex items-center sm:hidden w-full h-screen ">
        <p className="text-center text-white text-3xl">Please go to desktop screen to view the website</p>
      </div>
    </>
  );
}