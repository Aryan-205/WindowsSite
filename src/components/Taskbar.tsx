import logo from '../pages/logo'
import TabButton from "./TabButtons"

export default function Taskbar(){

  const t = new Date()
  return (
    <>
      <div className="w-full h-12 px-2 border bg-blue-950 flex justify-between items-center">
          {/* left widgets */}
          <div className="flex justify-center items-center gap-4">
            <img src="/weather.png" alt="" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start text-sm font-light text-white">
              <p>24 C</p>
              <p>Partly Sunny</p>
            </div>
          </div>
          {/* icons */}
          <div className="flex gap-4">
            {
              logo.map((i,index)=>(
                <TabButton key={index} img={i.img} comp={i.comp}/>
              ))
            }
          </div>
          {/* date and battery */}
          <div className="flex gap-4 justify-center items-center">
            <img src="/wifiIcon.png" className="w-4 h-4 object-contain" alt="" />
            <img src="/loud-speakerIcon.png" className="w-4 h-4 object-contain" alt="" />
            <img src="/batteryIcon.png" className="w-4 h-4 object-contain" alt="" />
            <div className="flex flex-col items-end text-sm font-light text-white">
              <p>{t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p>{t.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
    </>
  )
}