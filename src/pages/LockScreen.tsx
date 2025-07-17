import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LockScreen() {

  const [passwordScreen, setPasswordScreen]  = useState(false)
  const [pinShow, setPinShow]  = useState(true)
  const [pin, setPin] = useState('')
  const [hovered, setHovered] = useState(false)
  const [bar, setBar] = useState(false)

  const t = new Date()

  const navigate = useNavigate()

  function login(){
    if(pin == '@BolaJi_69'){
      navigate('/home')
    } else {
      setPinShow(false)
    }
  }

  return (
    <>
      <motion.div className={`w-full h-screen fixed z-10 bg-black ${bar ? 'hidden' : 'flex'} delay-1500 transition ease-out flex-col gap-4 justify-center items-center`}
        transition={{delay:1.5}}
      >
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-full p-2 border hover:bg-white"
          onClick={()=>setBar(true)}
        >
          <img
            src={hovered ? "/powerBlack.png" : "/powerIcon.png"}
            className="w-16 object-contain"
            alt=""
          />
        </button>
        {bar && (
          <div className="bg-gray-500 h-2 w-[20%] rounded-lg overflow-hidden mt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              className="bg-white h-full"
            />
          </div>
        )}
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full min-h-screen justify-center hidden sm:flex relative" onClick={()=>setPasswordScreen(true)}>
        <img src="/wallpaperlockscreen.jpg" className="absolute w-full h-full -z-10" alt="" />
        <div className={`mt-20 ${passwordScreen ? 'hidden' : 'display'}`}>
          <p className="text-white text-8xl text-center font-semibold">{t.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p>
          <p className="text-white text-3xl text-center font-light">{t.toLocaleDateString()}</p>
        </div>
        <motion.div
          className={`${passwordScreen ? 'flex' : 'hidden'} justify-center items-center w-full h-screen backdrop-blur-md scroll-none`}
          initial={{y:1200}}
          animate={{y:0}}
          transition={{duration:1.5, ease:easeInOut}}
          >
          <div className="flex flex-col justify-center items-center gap-8">
            <img src="/me.jpeg" className="rounded-full w-48 h-48" alt="" />
            <p className="text-center text-white text-5xl font-extralight">Aryan Bola</p>
            <div className="border">
              <input type="text" placeholder="PIN" className="bg-black bg-opacity-50 p-2 w-60 text-white" onChange={(e)=>setPin(e.target.value)} value={pin} onKeyDown={(e)=>{if(e.key=='Enter') {login()}}}/>
              <button onClick={login} className="text-white w-fit h-fit bg-black bg-opacity-50 p-2">Enter</button>
            </div>
            <p className="text-white cursor-pointer" onClick={()=>setPinShow((prev)=>!prev)} >I forgot my PIN</p>
            <p className={`${pinShow ? 'hidden' : 'display'} text-white`}>PIN:<a href="https://twitter.com/BolaJi_69">@BolaJi_69</a></p>
          </div>
        </motion.div>
      </motion.div>
      {/* small screen block */}
      <div className="bg-black flex items-center sm:hidden w-full h-screen ">
        <p className="text-center text-white text-3xl">Please go to desktop screen to view the website</p>
      </div>
    </>
  );
}