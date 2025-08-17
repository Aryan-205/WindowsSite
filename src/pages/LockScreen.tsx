import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LockScreen() {

  const [hovered, setHovered] = useState(false)
  const [bar, setBar] = useState(false)
  const [powerPage, setPowerPage] = useState(false)

  function barFunction(){
    setBar(true)
    setTimeout(() => {
      setPowerPage(true)
    }, 2000);
  }

  const t = new Date()
  const navigate = useNavigate()

  return (
    <>

    {/* power button screen */}
      <motion.div className={`w-full h-screen fixed z-10 bg-black ${powerPage ? 'hidden' : 'flex'} flex-col gap-4 justify-center items-center`}
        transition={{delay:1.5}}
      >
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-full p-2 border hover:bg-white"
          onClick={barFunction}
        >
          <img
            src={hovered ? "/powerBlack.png" : "/powerIcon.png"}
            className="w-16 object-contain"
            alt=""
          />
        </button>
        {bar && (
          <div className="h-2 w-[20%] rounded-lg overflow-hidden mt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%",backgroundColor:"gray" }}
              transition={{ duration: 1.5 }}
              className="bg-white h-full"
            />
          </div>
        )}
      </motion.div>

      {/* lock screen */}
      <div className="w-full min-h-screen justify-center hidden sm:flex relative" onClick={()=>navigate("/home")}>
        <img src="/wallpaperlockscreen.jpg" className="absolute w-full h-full -z-10" alt="" />
        <div className={`mt-20 `}>
          <p className="text-white text-8xl text-center font-semibold">{t.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p>
          <p className="text-white text-3xl text-center font-light">{t.toLocaleDateString()}</p>
        </div>
      </div>


      {/* small screen block */}
      <div className="bg-black flex items-center sm:hidden w-full h-screen ">
        <p className="text-center text-white text-3xl">Please go to desktop screen to view the website</p>
      </div>
    </>
  );
}