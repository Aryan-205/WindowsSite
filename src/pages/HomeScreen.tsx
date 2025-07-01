import { motion } from "motion/react";

import Taskbar from "../components/Taskbar";

export default function HomeScreen() {


  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full min-h-screen flex-col justify-between hidden sm:flex">
        {/* main screen */}
        <div className="bg-green-500 flex-1 relative" >
          <img src="/wallpaper.webp" className="absolute w-full h-full" alt="" />
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