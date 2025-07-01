export default function App() {

  return (
    <>
      <div className="w-full min-h-screen flex-col justify-between hidden sm:flex">
        <div className="bg-green-500 flex-1 relative" >
          <img src="/wallpaper.webp" className="absolute w-full h-full" alt="" />
        </div>
        <div className="taskbar w-full h-12 border">
          taskbar
        </div>
      </div>
      <div className="bg-black flex items-center sm:hidden w-full h-screen ">
        <p className="text-center text-white text-3xl">Please go to desktop screen to view the website</p>
      </div>
    </>
  );
}