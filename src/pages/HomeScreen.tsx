import { motion } from "motion/react";
import { useSelector } from "react-redux"
import Taskbar from "../components/Taskbar";
import Settings from "../components/Settings";

export default function HomeScreen() {
  const t = new Date()

  const showSettings = useSelector((state) => state.feature.render)
  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full min-h-screen flex-col justify-between hidden sm:flex">
        {/* main screen */}
        <div className="flex-1 relative" >
          <p className="text-white text-8xl text-center font-semibold absolute top-12 left-[40%]">{t.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p>
          <img src="/wallpaper.webp" className="absolute w-full h-full -z-10" alt="" />
          {showSettings && <Settings/>}
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