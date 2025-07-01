import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LockScreen() {

  const [passwordScreen, setPasswordScreen]  = useState(false)
  const [pinShow, setPinShow]  = useState(true)
  const [pin, setPin] = useState('')

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
      <div className="w-full min-h-screen justify-center hidden sm:flex relative" onClick={()=>setPasswordScreen(true)}>
        <img src="/wallpaper.webp" className="absolute w-full h-full -z-10" alt="" />
        <div className={`mt-20 ${passwordScreen ? 'hidden' : 'display'}`}>
          <p className="text-white text-8xl text-center font-semibold">23:40</p>
          <p className="text-white text-3xl text-center">Monday, March 27</p>
        </div>
        <div className={`${passwordScreen ? 'flex' : 'hidden'} justify-center items-center w-full h-screen backdrop-blur-md`}>
          <div className="flex flex-col justify-center items-center gap-8">
            <img src="/me.jpeg" className="rounded-full w-48 h-48" alt="" />
            <p className="text-center text-white text-5xl font-extralight">Aryan Bola</p>
            <div className="border">
              <input type="text" placeholder="PIN" className="bg-black bg-opacity-50 p-2 w-60 text-white" onChange={(e)=>setPin(e.target.value)} value={pin}/>
              <button onClick={login} onKeyDown={(e)=>{if(e.key=='Enter') {login}}} className="text-white w-fit h-fit bg-black bg-opacity-50 p-2">Enter</button>
            </div>
            <p className="text-white cursor-pointer" onClick={()=>setPinShow((prev)=>!prev)} >I forgot my PIN</p>
            <p className={`${pinShow ? 'hidden' : 'display'} text-white`}>PIN:<a href="https://twitter.com/BolaJi_69">@BolaJi_69</a></p>
          </div>
        </div>
      </div>
      {/* small screen block */}
      <div className="bg-black flex items-center sm:hidden w-full h-screen ">
        <p className="text-center text-white text-3xl">Please go to desktop screen to view the website</p>
      </div>
    </>
  );
}