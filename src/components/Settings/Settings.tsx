import { useState } from "react";
import { motion, useDragControls } from 'motion/react';
import useStore from "../../store/feature";

interface SettingItem {
  name: string;
  icon: string;
}
const settingLogo: SettingItem[] = [
  {
    name: "System",
    icon: "M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM12 9v6m3-3H9", // Example icon path
  },
  {
    name: "Personalize",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.999 2.999 0 01.042-1.128l.004-.002h.002A9.956 9.956 0 0012 21.75a9.956 9.956 0 007.938-3.75c.002-.001.006-.003.008-.004a2.999 2.999 0 01.042 1.128 3 3 0 00-5.78-1.128c.02-.07.04-.14.058-.21H12.5a3.001 3.001 0 01-2.971 3h-.002c-.005-.01-.01-.02-.014-.03a2.997 2.997 0 00-2.322-2.025 3 3 0 00-1.128-.042z", // Example icon path for personalize
  },
  {
    name: "Devices",
    icon: "M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM12 9v6m3-3H9", // Example icon path
  },
  // Add other settings as needed
];

export default function Settings() {
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);

  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const [brightness, setBrightness] = useState<number>(75);
  const [nightLight, setNightLight] = useState<boolean>(false);
  const [useHDR, setUseHDR] = useState<boolean>(false);
  const [activeSetting, setActiveSetting] = useState<string>("System"); // New state for active setting

  const controls = useDragControls();

  const wallpaper = useStore((state)=>state.wallpaper)
  const setWallpaper = useStore((state)=>state.setWallpaper)

  // Placeholder image URLs
  const mainWallpaper: string = wallpaper;
  const gridImages: string[] = [
    "/wallpaper.webp",
    '/wallpaper2.jpg',
    '/wallpaper3.jpg',
    '/wallpaper4.jpg',
    '/wallpaper5.jpg',
    '/wallpaper6.jpg',
    '/wallpaper7.jpg',
    '/wallpaper8.jpg',
  ];

  const SystemSettingsContent = () => (
    <>
    <div>
      <div className="pb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          System <span className="text-gray-400 font-normal">&gt;</span> Display
        </h1>
      </div>

      {/* Brightness & colour section */}
      <div className="bg-white rounded-lg p-5 shadow-sm pb-6">
        <h2 className="text-lg font-semibold text-gray-800 pb-4">
          Brightness & colour
        </h2>

        {/* Brightness */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-800">Brightness</p>
            <p className="text-xs text-gray-500">
              Change brightness for the built-in display
            </p>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(parseInt(e.target.value))}
            className="w-48 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
          />
          <span className="ml-3 text-sm text-gray-600">{brightness}%</span>
        </div>

        {/* Night light */}
        <div className="flex items-center justify-between py-3 border-t border-gray-200">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-800">Night light</p>
            <p className="text-xs text-gray-500">
              Use warmer colours to help block blue light
            </p>
          </div>
          <label
            htmlFor="nightLightToggle"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="nightLightToggle"
              className="sr-only peer"
              checked={nightLight}
              onChange={() => setNightLight(!nightLight)}
            />
            {/* ToggleSwitch component placeholder */}
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <button className="ml-4 text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Colour profile */}
        <div className="flex items-center justify-between py-3 border-t border-gray-200">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-800">
              Colour profile
            </p>
            <p className="text-xs text-gray-500">
              Determines how colours appear on your screen
            </p>
          </div>
          <span className="text-sm text-gray-600 mr-2">
            Adobe RGB (1998)
          </span>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Use HDR */}
        <div className="flex items-center justify-between py-3 border-t border-gray-200">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-800">Use HDR</p>
            <a href="#" className="text-xs text-blue-600 hover:underline">
              Learn about HDR
            </a>
          </div>
          <label
            htmlFor="hdrToggle"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="hdrToggle"
              className="sr-only peer"
              checked={useHDR}
              onChange={() => setUseHDR(!useHDR)}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <button className="ml-4 text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scale & layout section */}
      <div className="bg-white rounded-lg p-5 shadow-sm pb-6">
        <h2 className="text-lg font-semibold text-gray-800 pb-4">
          Scale & layout
        </h2>

        {/* Scale */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-800">Scale</p>
            <p className="text-xs text-gray-500">
              Change the size of text, apps, and other items
            </p>
          </div>
          <select className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400">
            <option>100% (Recommended)</option>
            <option>125%</option>
            <option>150%</option>
            <option selected>175%</option>
          </select>
        </div>

        {/* Display resolution */}
        <div className="flex items-center justify-between py-3 border-t border-gray-200">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-800">
              Display resolution
            </p>
            <p className="text-xs text-gray-500">
              Adjust the resolution to fit your connected display
            </p>
          </div>
          <select className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400">
            <option>1920 x 1080</option>
            <option selected>3840 x 2160 (Recommended)</option>
            <option>2560 x 1440</option>
          </select>
        </div>

        {/* Display orientation */}
        <div className="flex items-center justify-between py-3 border-t border-gray-200">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-800">
              Display orientation
            </p>
          </div>
          <select className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400">
            <option selected>Landscape</option>
            <option>Portrait</option>
          </select>
        </div>
      </div>

      {/* Multiple displays section */}
      <div className="bg-white rounded-lg p-5 shadow-sm pb-6">
        <h2 className="text-lg font-semibold text-gray-800 pb-2">
          Multiple displays
        </h2>
        <p className="text-sm text-gray-500 pb-4">
          Extend your desktop or duplicate your display to multiple monitors.
        </p>
        {/* Placeholder for "Detect" button and display arrangement */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
            Detect
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <div className="w-16 h-10 border border-gray-300 rounded flex items-center justify-center bg-gray-50">
              1
            </div>
            <div className="w-16 h-10 border border-gray-300 rounded flex items-center justify-center bg-gray-50">
              2
            </div>
          </div>
        </div>
      </div>

      {/* Related settings section */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 pb-2">
          Related settings
        </h2>
        <ul className="list-none p-0 m-0 space-y-2 text-sm">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Graphics settings
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Advanced display
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Display adapter properties
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );

  const PersonalizeSettingsContent = () => (
    <div className="bg-gray-100 flex flex-col gap-2">
      <div className="pb-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          Personalization <span className="text-gray-400 font-normal">&gt;</span> Background
        </h1>
      </div>

      {/* Main Wallpaper Section */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 pb-4">
          Choose your wallpaper
        </h2>
        <div className="w-full h-64 overflow-hidden rounded-lg pb-4">
          <img
            src={mainWallpaper}
            alt="Main Wallpaper"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600">
          This is your current desktop background.
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 pb-4">
          Recent images
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {gridImages.map((imgSrc: string, index: number) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow">
              <img
                src={imgSrc}
                alt={`Grid Image ${index + 1}`}
                className="w-full h-32 object-cover"
                onClick={()=>setWallpaper(imgSrc)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      className={`z-10 ${
        fullScreen ? "w-full h-full" : "w-[60%] h-[70%]"
      } ${nightLight ? 'bg-black text-white' : 'bg-white'} flex flex-col rounded-lg overflow-hidden shadow-xl`}
    >
      {/* Title Bar */}
      <div onPointerDown={(e) => controls.start(e)} className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3">
          <button className="w-4 h-4 flex items-center justify-center text-gray-600">
            <img src="https://placehold.co/16x16/CCCCCC/333333?text=<-" alt="Left Arrow" />
          </button>
          <p className="text-sm font-medium text-gray-800">Settings</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4"
          >
            <img src="https://placehold.co/16x16/CCCCCC/333333?text=-" alt="Minimize" />
          </button>
          <button
            onClick={() => setFullScreen((prev) => !prev)}
            className="w-3 h-3"
          >
            <img src="https://placehold.co/12x12/CCCCCC/333333?text=[]" alt="Maximize" />
          </button>
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4 hover:bg-red-500"
          >
            <img src="https://placehold.co/16x16/CCCCCC/333333?text=X" alt="Close" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Navigation */}
        <div className="w-[30%] h-full py-2 px-2 space-y-1 overflow-y-auto shrink-0 border-r border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2 h-16 px-2">
            {/* User profile picture (using placeholder) */}
            <img
              src="/me.jpeg"
              className="rounded-full w-12 h-12 object-cover"
              alt="User Avatar"
            />
            <div className="text-sm font-semibold text-gray-800">
              <p>Aryan Bola</p>
              <p className="text-gray-600 font-normal text-xs">
                aaryann5002@gmail.com
              </p>
            </div>
          </div>
          {/* Search input field */}
          <div className="relative pb-2 px-2">
            <input
              type="text"
              className="bg-gray-100 text-gray-800 border border-gray-300 rounded-md py-1.5 pl-8 pr-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Find a setting"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>

          {/* Navigation items */}
          {settingLogo.map((item: SettingItem, index: number) => (
            <div
              key={index}
              className={`flex items-center gap-3 py-2 px-2 rounded-md cursor-pointer ${
                activeSetting === item.name
                  ? "bg-blue-100 text-blue-800 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveSetting(item.name)} // Set active setting on click
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
              </div>
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Right Content - Conditional Rendering */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {activeSetting === "System" && <SystemSettingsContent />}
          {activeSetting === "Personalize" && <PersonalizeSettingsContent />}
        </div>
      </div>
    </motion.div>
  );
}
