
import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import useStore from "../store/feature";

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
  }
];

export default function Settings() {
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);
  const nightLight = useStore(state => state.nightLight);
  const toggleNightLight = useStore(state => state.toggleNightLight);

  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const [brightness, setBrightness] = useState<number>(75);
  const [useHDR, setUseHDR] = useState<boolean>(false);
  const [activeSetting, setActiveSetting] = useState<string>("System"); // New state for active setting

  const controls = useDragControls();

  const wallpaper = useStore((state) => state.wallpaper);
  const setWallpaper = useStore((state) => state.setWallpaper);

  // Placeholder image URLs
  const mainWallpaper: string = wallpaper;
  const gridImages: string[] = [
    "/wallpaper.webp",
    "/wallpaper2.jpg",
    "/wallpaper3.jpg",
    "/wallpaper4.jpg",
    "/wallpaper5.jpg",
    "/wallpaper6.jpg",
    "/wallpaper7.jpg",
    "/wallpaper8.jpg",
  ];

  const SystemSettingsContent = () => (
    <>
      <div>
        <div className="pb-6">
          <h1 className={`text-2xl font-semibold ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
            System <span className="text-gray-400 font-normal">&gt;</span>{" "}
            Display
          </h1>
        </div>

        {/* Brightness & colour section */}
        <div className={`rounded-lg p-5 shadow-sm pb-6 ${nightLight ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-lg font-semibold pb-4 ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
            Brightness & colour
          </h2>

          {/* Brightness */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex-1 mr-4">
              <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>Brightness</p>
              <p className={`text-xs ${nightLight ? "text-gray-400" : "text-gray-500"}`}>
                Change brightness for the built-in display
              </p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(parseInt(e.target.value))}
              className={`w-48 h-1 rounded-lg appearance-none cursor-pointer range-lg ${nightLight ? "bg-gray-600" : "bg-gray-200"}`}
            />
            <span className={`ml-3 text-sm ${nightLight ? "text-gray-400" : "text-gray-600"}`}>{brightness}%</span>
          </div>

          {/* Night light */}
          <div className={`flex items-center justify-between py-3 border-t ${nightLight ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex-1 mr-4">
              <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>Night light</p>
              <p className={`text-xs ${nightLight ? "text-gray-400" : "text-gray-500"}`}>
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
                onChange={() => toggleNightLight(nightLight)}
              />
              {/* ToggleSwitch component placeholder */}
              <div className={`w-9 h-5 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 ${nightLight ? "bg-gray-600 after:border-gray-500" : "bg-gray-200 after:border-gray-300"}`}></div>
            </label>
            <button className={`ml-4 ${nightLight ? "text-gray-500 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}>
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
          <div className={`flex items-center justify-between py-3 border-t ${nightLight ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex-1 mr-4">
              <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
                Colour profile
              </p>
              <p className={`text-xs ${nightLight ? "text-gray-400" : "text-gray-500"}`}>
                Determines how colours appear on your screen
              </p>
            </div>
            <span className={`text-sm mr-2 ${nightLight ? "text-gray-400" : "text-gray-600"}`}>Adobe RGB (1998)</span>
            <button className={`ml-4 ${nightLight ? "text-gray-500 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}>
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
          <div className={`flex items-center justify-between py-3 border-t ${nightLight ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex-1 mr-4">
              <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>Use HDR</p>
              <a href="#" className={`text-xs hover:underline ${nightLight ? "text-blue-400" : "text-blue-600"}`}>
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
              <div className={`w-9 h-5 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 ${nightLight ? "bg-gray-600 after:border-gray-500" : "bg-gray-200 after:border-gray-300"}`}></div>
            </label>
            <button className={`ml-4 ${nightLight ? "text-gray-500 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}>
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
        <div className={`rounded-lg p-5 shadow-sm pb-6 ${nightLight ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-lg font-semibold pb-4 ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
            Scale & layout
          </h2>

          {/* Scale */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex-1 mr-4">
              <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>Scale</p>
              <p className={`text-xs ${nightLight ? "text-gray-400" : "text-gray-500"}`}>
                Change the size of text, apps, and other items
              </p>
            </div>
            <select className={`rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 ${nightLight ? "bg-gray-700 text-gray-200 border border-gray-600" : "bg-white text-gray-700 border border-gray-300"}`}>
              <option>100% (Recommended)</option>
              <option>125%</option>
              <option>150%</option>
              <option selected>175%</option>
            </select>
          </div>

          {/* Display resolution */}
          <div className={`flex items-center justify-between py-3 border-t ${nightLight ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex-1 mr-4">
              <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
                Display resolution
              </p>
              <p className={`text-xs ${nightLight ? "text-gray-400" : "text-gray-500"}`}>
                Adjust the resolution to fit your connected display
              </p>
            </div>
            <select className={`rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 ${nightLight ? "bg-gray-700 text-gray-200 border border-gray-600" : "bg-white text-gray-700 border border-gray-300"}`}>
              <option>1920 x 1080</option>
              <option selected>3840 x 2160 (Recommended)</option>
              <option>2560 x 1440</option>
            </select>
          </div>

          {/* Display orientation */}
          <div className={`flex items-center justify-between py-3 border-t ${nightLight ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex-1 mr-4">
              <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
                Display orientation
              </p>
            </div>
            <select className={`rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 ${nightLight ? "bg-gray-700 text-gray-200 border border-gray-600" : "bg-white text-gray-700 border border-gray-300"}`}>
              <option selected>Landscape</option>
              <option>Portrait</option>
            </select>
          </div>
        </div>

        {/* Multiple displays section */}
        <div className={`rounded-lg p-5 shadow-sm pb-6 ${nightLight ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-lg font-semibold pb-2 ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
            Multiple displays
          </h2>
          <p className={`text-sm pb-4 ${nightLight ? "text-gray-400" : "text-gray-500"}`}>
            Extend your desktop or duplicate your display to multiple monitors.
          </p>
          {/* Placeholder for "Detect" button and display arrangement */}
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
              Detect
            </button>
            <div className={`flex items-center gap-2 text-sm ${nightLight ? "text-gray-400" : "text-gray-700"}`}>
              <div className={`w-16 h-10 rounded flex items-center justify-center border ${nightLight ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-300"}`}>
                1
              </div>
              <div className={`w-16 h-10 rounded flex items-center justify-center border ${nightLight ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-300"}`}>
                2
              </div>
            </div>
          </div>
        </div>

        {/* Related settings section */}
        <div className={`rounded-lg p-5 shadow-sm ${nightLight ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-lg font-semibold pb-2 ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
            Related settings
          </h2>
          <ul className="list-none p-0 m-0 space-y-2 text-sm">
            <li>
              <a href="#" className={`hover:underline ${nightLight ? "text-blue-400" : "text-blue-600"}`}>
                Graphics settings
              </a>
            </li>
            <li>
              <a href="#" className={`hover:underline ${nightLight ? "text-blue-400" : "text-blue-600"}`}>
                Advanced display
              </a>
            </li>
            <li>
              <a href="#" className={`hover:underline ${nightLight ? "text-blue-400" : "text-blue-600"}`}>
                Display adapter properties
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  const PersonalizeSettingsContent = () => (
    <div className={`flex flex-col gap-2 ${nightLight ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="pb-2">
        <h1 className={`text-2xl font-semibold ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
          Personalization{" "}
          <span className="text-gray-400 font-normal">&gt;</span> Background
        </h1>
      </div>

      {/* Main Wallpaper Section */}
      <div className={`rounded-lg p-5 shadow-sm ${nightLight ? "bg-gray-800" : "bg-white"}`}>
        <h2 className={`text-lg font-semibold pb-4 ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
          Choose your wallpaper
        </h2>
        <div className="w-full h-64 overflow-hidden rounded-lg pb-4">
          <img
            src={mainWallpaper}
            alt="Main Wallpaper"
            className="w-full h-full object-cover"
          />
        </div>
        <p className={`text-sm ${nightLight ? "text-gray-400" : "text-gray-600"}`}>
          This is your current desktop background.
        </p>
      </div>

      {/* Image Grid Section */}
      <div className={`rounded-lg p-5 shadow-sm ${nightLight ? "bg-gray-800" : "bg-white"}`}>
        <h2 className={`text-lg font-semibold pb-4 ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
          Recent images
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {gridImages.map((imgSrc: string, index: number) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <img
                src={imgSrc}
                alt={`Grid Image ${index + 1}`}
                className="w-full h-32 object-cover"
                onClick={() => setWallpaper(imgSrc)}
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
      className={`z-10 ${fullScreen ? "w-full h-full" : "w-[60%] h-[70%]"} flex flex-col rounded-lg overflow-hidden shadow-xl ${nightLight ? "bg-gray-900" : "bg-white"}`}
    >
      {/* Title Bar */}
      <div
        onPointerDown={(e) => controls.start(e)}
        className={`h-[5%] flex items-center justify-between px-4 shrink-0 border-b ${nightLight ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"}`}
      >
        <div className="flex items-center gap-3">
          <button className={`w-4 h-4 flex items-center justify-center ${nightLight ? "text-gray-400" : "text-gray-600"}`}>
            <img
              src={nightLight ? "lightleftArrow.png" : "/darkleftArrow.png"}
              alt="Left Arrow"
            />
          </button>
          <p className={`text-sm font-medium ${nightLight ? "text-gray-200" : "text-gray-800"}`}>Settings</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={clearActiveComponent} className="w-3 h-3">
            <img
              src={nightLight ? "lightminimize.png" : "/darkminimize.png"}
              alt="Minimize"
            />
          </button>
          <button
            onClick={() => setFullScreen((prev) => !prev)}
            className="w-3 h-3"
          >
            <img
              src={nightLight ? "lightsquare.png" : "/darksquare.png"}
              alt="Maximize"
            />
          </button>
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4 hover:bg-red-500"
          >
            <img
              src={nightLight ? "lightclose.png" : "/darkclose.png"}
              alt="Close"
            />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Navigation */}
        <div className={`w-[30%] h-full py-2 px-2 space-y-1 overflow-y-auto shrink-0 border-r ${nightLight ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"}`}>
          <div className="flex items-center gap-2 h-16 px-2">
            {/* User profile picture (using placeholder) */}
            <img
              src="/me.jpeg"
              className="rounded-full w-12 h-12 object-cover"
              alt="User Avatar"
            />
            <div className={`text-sm font-semibold ${nightLight ? "text-gray-200" : "text-gray-800"}`}>
              <p>Aryan Bola</p>
              <p className={`font-normal text-xs ${nightLight ? "text-gray-400" : "text-gray-600"}`}>
                aaryann5002@gmail.com
              </p>
            </div>
          </div>
          {/* Search input field */}
          <div className="relative pb-2 px-2">
            <input
              type="text"
              className={`rounded-md py-1.5 pl-8 pr-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 ${nightLight ? "bg-gray-800 text-gray-200 border border-gray-700" : "bg-gray-100 text-gray-800 border border-gray-300"}`}
              placeholder="Find a setting"
            />
            <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${nightLight ? "text-gray-400" : "text-gray-500"}`}>
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
                  ? nightLight
                    ? "bg-blue-900 text-blue-300 font-semibold"
                    : "bg-blue-100 text-blue-800 font-semibold"
                  : nightLight
                  ? "hover:bg-gray-800 text-gray-300"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveSetting(item.name)} 
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
        <div className={`flex-1 overflow-y-auto p-6 ${nightLight ? "bg-gray-900" : "bg-gray-100"}`}>
          {activeSetting === "System" && <SystemSettingsContent />}
          {activeSetting === "Personalize" && <PersonalizeSettingsContent />}
        </div>
      </div>
    </motion.div>
  );
}