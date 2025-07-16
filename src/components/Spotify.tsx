import useStore from "../store/feature";
import { useRef, useState, useEffect } from "react";
import { motion, useDragControls } from 'motion/react'
import MusicBox from "./MusicBox";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  song: string; // Path/URL to the audio file
  albumArt?: string;
  audioUrl: string; // Added this property to the interface
}

export default function Spotify() {
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);
  const currentSong = useStore((state) => state.currentSong);
  const setSong = useStore((state) => state.setSong);

  const [fullScreen, setFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Added local state for current time and duration
  const [currentTime, setCurrentTime] = useState(0);
  const [songDuration, setSongDuration] = useState(0);


  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const controls = useDragControls();

  const globalVolume = useStore((state) => state.globalVolume);
  const setGlobalVolume = useStore((state) => state.setGlobalVolume);

  // This block runs on every render. While it works, it's generally better
  // to put DOM manipulations inside a useEffect. However, as per your request
  // to not change logic, it remains here.
  if (audioPlayerRef.current) {
    audioPlayerRef.current.volume = globalVolume;
    audioPlayerRef.current.muted = isMuted; // Synchronize muted state
    audioPlayerRef.current.loop = isLooping; // Synchronize loop state
  }

  // --- Effect 1: Handle song source changes and load ---
  useEffect(() => {
    const audioEl = audioPlayerRef.current;
    if (audioEl && currentSong) {
      // Only update source and load if the song has actually changed
      if (audioEl.src !== currentSong.song) {
        audioEl.src = currentSong.song;
        audioEl.load(); // Load the new audio
        setCurrentTime(0); // Reset current time when new song loads
        setSongDuration(0); // Reset duration, will be updated by 'loadedmetadata'
      }
    } else if (audioEl && !currentSong) {
      audioEl.pause();
      audioEl.src = ''; // Clear source if no song
      setCurrentTime(0);
      setSongDuration(0);
    }
  }, [currentSong]); // Dependency: Only currentSong

  // --- Effect 2: Handle play/pause state changes ---
  useEffect(() => {
    const audioEl = audioPlayerRef.current;
    if (audioEl && currentSong) { // Ensure audio element and current song are available
      if (isPlaying) {
        audioEl.play().catch(e => console.error("Error playing audio:", e));
      } else {
        audioEl.pause();
      }
    }
  }, [isPlaying, currentSong]); // Dependencies: isPlaying and currentSong (to ensure it's loaded)


  // Add event listeners for timeupdate, loadedmetadata, and ended
  useEffect(() => {
    const audioEl = audioPlayerRef.current;
    if (audioEl) {
      const handleTimeUpdate = () => {
        setCurrentTime(audioEl.currentTime);
      };
      const handleLoadedMetadata = () => {
        setSongDuration(audioEl.duration);
      };
      const handleEnded = () => {
        setIsPlaying(false); // Pause when song ends
        // You might want to call playNextSong() here
      };

      audioEl.addEventListener('timeupdate', handleTimeUpdate);
      audioEl.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioEl.addEventListener('ended', handleEnded);

      return () => {
        audioEl.removeEventListener('timeupdate', handleTimeUpdate);
        audioEl.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioEl.removeEventListener('ended', handleEnded);
      };
    }
  }, [setIsPlaying]); // Dependencies: setIsPlaying, as it's used in handleEnded

  const togglePlayPause = () => {
    // The actual play/pause is handled by the useEffect based on isPlaying state
    setIsPlaying(prev => !prev);
  };

  // Handler for mute button
  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  // Handler for loop button
  const toggleLoop = () => {
    setIsLooping(prev => !prev);
  };

  // Placeholder for Next song logic
  const playNextSong = () => {
    if (!currentSong || musicLibrary.length === 0) return;

    const currentIndex = musicLibrary.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % musicLibrary.length;
    setSong(musicLibrary[nextIndex]);
    setIsPlaying(true); // Ensure it plays when switching to next song
  };

  // Placeholder for Previous song logic
  const playPreviousSong = () => {
    if (!currentSong || musicLibrary.length === 0) return;

    const currentIndex = musicLibrary.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + musicLibrary.length) % musicLibrary.length;
    setSong(musicLibrary[prevIndex]);
    setIsPlaying(true);
  };

  // Helper function to format time from seconds to MM:SS
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const musicLibrary: Song[] = [
    {
      id: "1",
      title: "Tu Chaiye",
      artist: "Atif Ashlam",
      duration: "3:22",
      albumArt: "/tuChaiye.jpg",
      song: '/tuChaiye.mp3',
      audioUrl: '/tuChaiye.mp3' // Added audioUrl
    },
    {
      id: "2",
      title: "Humsafar",
      artist: "One Direction",
      duration: "4:05",
      albumArt: "/Humsafar.jpg",
      song: '/Humsafar.mp3',
      audioUrl: '/Humsafar.mp3' // Added audioUrl
    },
    {
      id: "3",
      title: "Finding Her",
      artist: "One Direction",
      duration: "3:49",
      albumArt: "/findingHer.jpg",
      song: '/findingHer.mp3',
      audioUrl: '/findingHer.mp3' // Added audioUrl
    },
    {
      id: "4",
      title: "Attention",
      artist: "One Direction",
      duration: "3:22",
      albumArt: "/Attention.jpg",
      song: '/Attention.mp3',
      audioUrl: '/Attention.mp3' // Added audioUrl
    },
    // {
    //   id: "5",
    //   title: "O Rangrez",
    //   artist: "One Direction",
    //   duration: "3:22",
    //   albumArt: "/ORangrez.jpg",
    //   song:'/ORangrez.mp3',
    //   audioUrl:'/ORangrez.mp3' // Added audioUrl
    // },
  ];

  // Calculate progress percentage
  const progressPercent = songDuration > 0 ? (currentTime / songDuration) * 100 : 0;


  return (
    <motion.div
      drag
      dragControls={controls}
      dragElastic={0}
      dragMomentum={false}
      dragListener={false}
      className={`z-10 ${
        fullScreen ? "w-full h-full" : "w-[60%] h-[70%]"
      }  bg-black text-white flex flex-col rounded-lg overflow-hidden shadow-xl`}
    >
      {/* Title Bar */}
      <div onPointerDown={event => controls.start(event)} className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-700 bg-gray-500">
        <div className="flex items-center gap-3">
          <button className="w-4 h-4 flex items-center justify-center text-gray-400">
            <img src="/leftArrow.png" alt="Back" className="w-full h-full" />
          </button>
          <p className="text-sm font-medium text-gray-300">Spotify</p>
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
            <img src="/close.png" alt="Close" className="w-full h-full" />
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
              <img src="/homewhite.png" alt="Home" className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-3 text-white mb-4">
              <img src="/searchIcon.png" alt="Search" className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-3 text-gray-300 hover:text-white mb-4">
              <img src="/playlist.png" alt="Your Library" className="w-5 h-5" />
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
            <div className="flex-1 overflow-y-auto custom-scrollbar overflow-hidden">
              <p className="text-white text-xl font-bold px-4 py-3">Music Library</p>
              {musicLibrary.map((s) => (
                <MusicBox
                  key={s.id}
                  songData={s}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Player Bar */}
        <div className="h-[12%] flex justify-between items-center bg-gray-800 px-4 py-2 border-t border-gray-700 shrink-0">
          {/* audio */}
          <audio autoPlay src={currentSong?.song} muted={isMuted} loop={isLooping} ref={audioPlayerRef} className="hidden" id="audio"/>

          <div className="flex gap-4 items-center w-44 ">
            {currentSong?.albumArt && (
              <img
                src={currentSong?.albumArt}
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
              {/* Mute button */}
              <button onClick={toggleMute}>
                <img src={isMuted ? "/mute.png" : "/loud-speakerIcon.png"} alt="Mute" className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
              {/* Previous button */}
              <button onClick={playPreviousSong}>
                <img src="/nextButton.png" alt="Previous" className="w-5 h-5 rotate-180 opacity-70 hover:opacity-100" />
              </button>
              {/* Play/Pause button */}
              <button onClick={togglePlayPause}>
                <img src={isPlaying ? "/pauseButton.png" : '/playButton.png'} alt="Play/Pause" className="w-8 h-8 bg-green-500 rounded-full flex justify-center items-center p-1" />
              </button>
              {/* Next button */}
              <button onClick={playNextSong}>
                <img src="/nextButton.png" alt="Next" className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
              {/* Loop button */}
              <button onClick={toggleLoop}>
                <img src={isLooping ? "/loopIcon.png" : "/notloopIcon.png"} alt="Repeat" className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
            </div>
            <div className="flex items-center w-full max-w-xl">
              <p className="text-gray-400 text-xs mr-2">{formatTime(currentTime)}</p> {/* Made dynamic */}
              <div className="flex-grow h-1 bg-gray-600 rounded-full relative">
                <div
                  className="absolute left-0 top-0 h-full bg-green-500 rounded-full"
                  style={{ width: `${progressPercent}%` }} // Made dynamic
                ></div>
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"
                     style={{ left: `${progressPercent}%` }} // Made dynamic
                ></div>
              </div>
              <p className="text-gray-400 text-xs ml-2">{formatTime(songDuration)}</p> {/* Made dynamic */}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={globalVolume > 0 ? "/loud-speakerIcon.png" : '/mute.png'} className="w-4" alt="" />
            <input
              type="range"
              min="0"
              step={0.01} // Changed step to 0.01 for finer control
              max="1"
              value={globalVolume}
              onChange={(e) => setGlobalVolume(parseFloat(e.target.value))}
              className="w-24 h-1 bg-gray-600 rounded-full volume-slider"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
