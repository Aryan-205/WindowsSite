export default function HomeScreen() {

  return (
    <>
      <div className="w-full min-h-screen flex-col justify-between hidden sm:flex">
        {/* main screen */}
        <div className="bg-green-500 flex-1 relative" >
          <img src="/wallpaper.webp" className="absolute w-full h-full" alt="" />
        </div>
        {/* taskbar */}
        <div className="w-full h-12 border bg-blue-950 flex justify-between items-center">
          {/* left widgets */}
          <div></div>
          {/* icons */}
          <div className="flex gap-2">
            <img src="/windows11logo.png" className="w-8 h-8 object-contain" alt="" />
            <img src="/searchIcon.png" className="w-8 h-8 object-contain" alt="" />
            <img src="/fileExplorerIcon.svg" className="w-8 h-8 object-contain" alt="" />
            <img src="/windows11logo.png" className="w-8 h-8 object-contain" alt="" />
          </div>
          {/* date and battery */}
          <div></div>
        </div>
      </div>
      {/* small screen block */}
      <div className="bg-black flex items-center sm:hidden w-full h-screen ">
        <p className="text-center text-white text-3xl">Please go to desktop screen to view the website</p>
      </div>
    </>
  );
}