import { motion } from "motion/react";
import Taskbar from "../components/Taskbar";
import ActiveComponentRenderer from "../components/RenderTab";
import useStore from "../store/feature";

export default function HomeScreen() {
  const t = new Date()

  const wallpaper = useStore((state)=>state.wallpaper)

  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full h-screen flex-col justify-between hidden sm:flex">
        {/* main screen */}
        <div className="flex-1 flex justify-center items-center relative w-full" style={{ height: 'calc(100% - 3rem)' }} >
          <p className="text-white text-8xl text-center font-semibold absolute top-12 left-[40%]">{t.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p>
          <img src={wallpaper} className="absolute w-full h-full object-cover -z-10" alt="" />
          <div className="w-full h-full relative flex justify-center items-center">
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