import { useState } from 'react';
import useStore from '../store/feature';

export default function WindowsTab() {
  const [activeTab, setActiveTab] = useState('Pinned'); 

  const clearActiveComponent = useStore((state)=>state.clearActiveComponent)

  const pinnedApps = [
    { name: 'Edge', icon: '/microsoftEdge.png' },
    { name: 'Word', icon: '/msword.png' },
    { name: 'Excel', icon: '/msexcel.png' },
    { name: 'PowerPoint', icon: '/mspp.png' },
    { name: 'Microsoft 365', icon: '/ms365.png' },
    { name: 'Outlook (new)', icon: '/outlook.png' },
    { name: 'Microsoft Store', icon: '/msstore.png' },
    { name: 'Photos', icon: '/photos.png' },
    { name: 'OneNote', icon: '/note.png' },
    { name: 'Microsoft Defender', icon: '/msdefender.png' },
    { name: 'Paint', icon: '/msdefender.png' },
    { name: 'Notepad', icon: '/notepad.png' },
    { name: 'Settings', icon: '/Settings.png' },
    { name: 'Xbox', icon: '/Xbox.png' },
    { name: 'Spotify', icon: '/spotifyLogo.png' },
    { name: 'Clock', icon: '/clock.png' },
  ];

  const allApps = [
    { category: 'Productivity', apps: [
      { name: 'App 1', icon: 'bg-red-400' },
      { name: 'App 2', icon: 'bg-green-400' },
      { name: 'App 3', icon: 'bg-blue-400' },
      { name: 'App 4', icon: 'bg-yellow-400' },
    ]},
    { category: 'Other', apps: [
      { name: 'App 5', icon: 'bg-purple-400' },
      { name: 'App 6', icon: 'bg-orange-400' },
      { name: 'App 7', icon: 'bg-pink-400' },
      { name: 'App 8', icon: 'bg-cyan-400' },
    ]},
    { category: 'Utilities & Tools', apps: [
      { name: 'App 9', icon: 'bg-indigo-400' },
      { name: 'App 10', icon: 'bg-lime-400' },
      { name: 'App 11', icon: 'bg-rose-400' },
      { name: 'App 12', icon: 'bg-fuchsia-400' },
    ]},
    { category: 'Games', apps: [
      { name: 'Game 1', icon: 'bg-emerald-400' },
      { name: 'Game 2', icon: 'bg-sky-400' },
      { name: 'Game 3', icon: 'bg-violet-400' },
      { name: 'Game 4', icon: 'bg-amber-400' },
    ]},
    { category: 'Information & Reading', apps: [
      { name: 'Info App 1', icon: 'bg-gray-500' },
      { name: 'Info App 2', icon: 'bg-zinc-500' },
    ]},
    { category: 'Creativity', apps: [
      { name: 'Creative App 1', icon: 'bg-red-300' },
      { name: 'Creative App 2', icon: 'bg-green-300' },
    ]},
    { category: 'Entertainment', apps: [
      { name: 'Entertainment App 1', icon: 'bg-blue-300' },
      { name: 'Entertainment App 2', icon: 'bg-yellow-300' },
    ]},
  ];

  return (
    <>
    <div className="absolute bottom-0 left-[28%] bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-full max-w-2xl border border-gray-700 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">

      {/* Search Bar */}
      <div className="mb-6 flex-shrink-0"> 
        <div className="relative">
          <input
            type="text"
            placeholder="Search for apps, settings, and documents"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 bg-opacity-70 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* Search Icon (SVG) */}
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabs for Pinned/All */}
      <div className="flex justify-start mb-4 border-b border-gray-700 pb-2 flex-shrink-0"> {/* flex-shrink-0 */}
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === 'Pinned'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          } transition-all duration-200 ease-in-out`}
          onClick={() => setActiveTab('Pinned')}
        >
          Pinned
        </button>
        <button
          className={`ml-3 px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === 'All'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          } transition-all duration-200 ease-in-out`}
          onClick={() => setActiveTab('All')}
        >
          All
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'Pinned' && (
        <div className="flex-grow overflow-y-auto pr-2"> {/* flex-grow allows it to take available space, overflow-y-auto makes it scrollable */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-200">Pinned</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm">Show all &gt;</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {pinnedApps.map((app, index) => (
              <div key={index} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                {/* Placeholder for App Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl `}>
                  {/* You will replace this with your actual image */}
                  <img className='w-8 h-8' src={app.icon} alt="" /> {/* Hidden for accessibility */}
                </div>
                <span className="mt-2 text-xs text-gray-300 text-center">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'All' && (
        <div className="flex-grow overflow-y-auto pr-2"> {/* flex-grow and overflow-y-auto for the "All" content */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-200">All apps</h2>
            <select className="bg-gray-700 bg-opacity-70 text-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600">
              <option>View: Category</option>
              <option>View: Alphabetical</option>
            </select>
          </div>
          <div className="space-y-6">
            {allApps.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-md font-medium text-gray-200 mb-3">{category.category}</h3>
                <div className="grid grid-cols-4 gap-4">
                  {category.apps.map((app, appIndex) => (
                    <div key={appIndex} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                      {/* Placeholder for App Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl ${app.icon}`}>
                        {/* You will replace this with your actual image */}
                        <span className="opacity-0">{app.name.charAt(0)}</span> {/* Hidden for accessibility */}
                      </div>
                      <span className="mt-2 text-xs text-gray-300 text-center">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* User Profile and Power Buttons */}
      <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center flex-shrink-0"> {/* flex-shrink-0 */}
        <div className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
          {/* User Profile Picture Placeholder */}
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
            AB
          </div>
          <span className="text-gray-200 text-sm">Aryan Bola</span>
        </div>
        <div className="flex space-x-3">
          {/* Power Button */}
          <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 text-gray-300 hover:text-white">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1" />
            </svg>
          </button>
          {/* Settings/Gear Icon (example, based on common start menu elements) */}
          <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 text-gray-300 hover:text-white">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className='w-full h-full' onClick={clearActiveComponent}/>
    </>
  );
}
