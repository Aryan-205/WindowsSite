import useStore from "../../store/feature";
import { useState } from "react";
import settingLogo from "./settingLogo";
import ToggleSwitch from "../Ui/ToggleSwitch";
import {motion, useDragControls} from 'motion/react'

export default function Settings() {
  const clearActiveComponent = useStore((state)=>state.clearActiveComponent)
  const [fullScreen, setFullScreen] = useState(false);

  const [brightness, setBrightness] = useState(75);
  const [nightLight, setNightLight] = useState(false);
  const [useHDR, setUseHDR] = useState(false);

  const controls = useDragControls()

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      className={`z-10 ${
        fullScreen ? "w-full h-full" : "w-[60%] h-[70%]"
      } ${nightLight ? 'bg-black text-white' : 'bg-white'} flex flex-col rounded-lg overflow-hidden shadow-xl`}
    >
      {/* Title Bar */}
      <div onPointerDown={event => controls.start(event)} className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3">
          <button className="w-4 h-4 flex items-center justify-center text-gray-600">
            <img src="/leftArrow.png" alt="" />
          </button>
          <p className="text-sm font-medium text-gray-800">Settings</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4"
          >
            <img src="/minus.png" alt="" />
          </button>
          <button
            onClick={() => setFullScreen((prev) => !prev)}
            className="w-3 h-3"
          >
            <img src="/square.png" alt="" />
          </button>
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4 hover:bg-red-500"
          >
            <img src="/close.png" alt="" />
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
          <div className="relative mb-2 px-2">
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
          {settingLogo.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 py-2 px-2 rounded-md cursor-pointer ${
                item.name === "System"
                  ? "bg-blue-100 text-blue-800 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
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

        {/* Right Content - Display Settings */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              System <span className="text-gray-400 font-normal">&gt;</span>{" "}
              Display
            </h1>
          </div>

          {/* Brightness & colour section */}
          <div className="bg-white rounded-lg p-5 shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Brightness & colour
            </h2>

            {/* Brightness */}
            <div className="flex items-center justify-between mb-4">
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
                <ToggleSwitch/>
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
          <div className="bg-white rounded-lg p-5 shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Scale & layout
            </h2>

            {/* Scale */}
            <div className="flex items-center justify-between mb-4">
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
          <div className="bg-white rounded-lg p-5 shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Multiple displays
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Extend your desktop or duplicate your display to multiple
              monitors.
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
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
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
      </div>
    </motion.div>
  );
}
