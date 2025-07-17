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
            <TabButton img='/windows11logo.png' comp='WindowsTab' width="w-10"/>
            <TabButton img='/searchIcon.png' comp='Search' width="w-8"/>
            <TabButton img='/fileExplorerIcon.svg' comp='FileExplorer' width="w-8"/>
            <TabButton img='/Settings.png' comp='Settings' width="w-8"/>
            <TabButton img='/spotifyLogo.png' comp='Spotify' width="w-8"/>
            <button className="w-8"><a href="https://github.com/Aryan-205" target="_blank"><img src="/github.png" /></a></button>
            <button className="w-8"><a href="https://x.com/BolaJi_69" target="_blank"><img src="/xLogo2.png" /></a></button>
            <TabButton img='/Zoro.jpeg' comp='Me' width="w-10 rounded-xl border"/>
          </div>
          {/* date and battery */}
          <div className="flex gap-4 justify-center items-center">
            <TabButton img='/wifiIcon.png' comp='Wifi' width="w-4"/>
            <TabButton img='/loud-speakerIcon.png' comp='Volume' width="w-4"/>
            <TabButton img='/batteryIcon.png' comp='Battery' width="w-4"/>
            <div className="flex flex-col items-end text-sm font-light text-white">
              <p>{t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p>{t.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
    </>
  )
}