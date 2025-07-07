import useStore from "../store/feature";
import { useState } from "react";
import { MusicBox } from "./MusicBox";

export default function Spotify() {
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);
  const [fullScreen, setFullScreen] = useState(false);
  const [play, setPlay] = useState(false);

  const currentSong = useStore((state)=>state.currentSong)


  const musicLibrary = [
    {
      title: "What Makes You Beautiful",
      artist: "One Direction",
      duration: "3:22",
      albumArt: "/what_makes_you_beautiful_album_art.jpg", // Placeholder,
      song:''
    },
    {
      title: "Story of My Life",
      artist: "One Direction",
      duration: "4:05",
      albumArt: "/story_of_my_life_album_art.jpg", // Placeholder
      song:''
    },
    {
      title: "Perfect",
      artist: "One Direction",
      duration: "3:49",
      albumArt: "/perfect_album_art.jpg", // Placeholder
      song:''
    },
    {
      title: "Live While We're Young",
      artist: "One Direction",
      duration: "3:22",
      albumArt: "/live_while_were_young_album_art.jpg", // Placeholder
      song:''
    },
  ];


  return (
    <div
      className={`z-10 ${
        fullScreen ? "w-full h-full" : "w-[60%] h-[70%]"
      }  bg-black text-white flex flex-col rounded-lg overflow-hidden shadow-xl`}
    >
      {/* Title Bar */}
      <div className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-700 bg-gray-900">
        <div className="flex items-center gap-3">
          <button className="w-4 h-4 flex items-center justify-center text-gray-400">
            <img src="/leftArrow.png" alt="Back" className="w-full h-full" />
          </button>
          <p className="text-sm font-medium text-gray-300">Spotify</p> {/* Changed from Settings to Spotify */}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={clearActiveComponent} className="w-4 h-4">
            <img src="/minus.png" alt="Minimize" className="w-full h-full" />
          </button>
          <button
            onClick={() => setFullScreen((prev) => !prev)}
            className="w-3 h-3"
          >
            <img src="/square.png" alt="Maximize" className="w-full h-full" />
          </button>
          <button
            onClick={clearActiveComponent}
            className="w-4 h-4 hover:bg-red-500 rounded-full flex items-center justify-center"
          >
            <img src="/close.png" alt="Close" className="w-2 h-2" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col w-full h-full">
        <div className="flex-1 flex ">
          {/* Sidebar */}
          <div className="w-[10%] flex flex-col justify-start items-center p-4 bg-gray-900 border-r border-gray-700">
            <img src="/spotifyLogo.png" alt="Spotify Logo" className="w-10 h-10 mb-8" />
            <button className="flex items-center gap-3 text-gray-300 hover:text-white mb-4">
              <img src="/home_icon.png" alt="Home" className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-3 text-white mb-4">
              <img src="/search_icon.png" alt="Search" className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-3 text-gray-300 hover:text-white mb-4">
              <img src="/library_icon.png" alt="Your Library" className="w-5 h-5" />
            </button>
          </div>
          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-gray-900">
            {/* Search Bar Area */}
            <div className="h-[15%] flex items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-black">
              <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-[80%]">
                <img src="/searchIcon.png" alt="Search" className="w-4 h-4 mr-2" />
                <input
                  type="text"
                  placeholder="Search songs or artists..."
                  className="bg-transparent outline-none text-white placeholder-gray-400 flex-grow"
                />
              </div>
            </div>
            {/* Music List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <p className="text-white text-xl font-bold px-4 py-3">Music Library</p>
              {musicLibrary.map((song, index) => (
                <MusicBox
                  key={index}
                  song={song}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Player Bar */}
        <div className="h-[12%] flex justify-between items-center bg-gray-800 px-4 py-2 border-t border-gray-700 shrink-0">
          <div className="flex gap-4 items-center w-44 ">
            {currentSong?.coverImage && (
              <img
                src={currentSong?.coverImage}
                alt="Current Album Art"
                className="w-14 h-14 rounded"
              />
            )}
            <div className="flex flex-col">
              <p className="text-white text-base font-medium">{currentSong?.title}</p>
              <p className="text-gray-400 text-sm">{currentSong?.artist}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6 mb-2">
              <button>
                <img src="/shuffleButton.png" alt="Shuffle" className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
              <button>
                <img src="/nextButton.png" alt="Previous" className="w-5 h-5 rotate-180 opacity-70 hover:opacity-100" />
              </button>
              <button>
                <img src={play ? "/playButton.png" : '/pauseButton.png'} alt="Play" className="w-8 h-8 bg-green-500 rounded-full flex justify-center items-center p-1" /> 
              </button>
              <button>
                <img src="/nextButton.png" alt="Next" className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
              <button>
                <img src="/repeatButton.png" alt="Repeat" className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
            </div>
            <div className="flex items-center w-full max-w-xl">
              <p className="text-gray-400 text-xs mr-2">0:19</p>
              <div className="flex-grow h-1 bg-gray-600 rounded-full relative">
                <div
                  className="absolute left-0 top-0 h-full bg-green-500 rounded-full"
                  style={{ width: "calc((19 / 245) * 100%)" }} 
                ></div>
                <div className="absolute left-[calc((19/245)*100%)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
              <p className="text-gray-400 text-xs ml-2">4:08</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="100"
              className="w-24 h-1 bg-gray-600 rounded-full volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}