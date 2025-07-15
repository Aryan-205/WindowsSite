import useStore from "../store/feature";
import { useRef, useState, useEffect } from "react";
import { motion, useDragControls } from 'motion/react'
import MusicBox from "./MusicBox";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration:string;
  song: string;
  albumArt?: string;
}

export default function Spotify() {
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);
  const currentSong = useStore((state) => state.currentSong);
  const setSong = useStore((state) => state.setSong);

  const [fullScreen, setFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Manages play/pause state
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const controls = useDragControls();

  // --- useEffect for Audio Playback Control ---
  useEffect(() => {
    const audio = audioPlayerRef.current;
    if (!audio) return;

    // This flag helps prevent unwanted auto-plays when currentSong changes
    // without an explicit play action from the user (e.g., clicking the song in the list)
    let shouldPlayOnSrcChange = false;

    if (currentSong && audio.src !== currentSong.song) {
      audio.src = currentSong.song;
      audio.load();
      shouldPlayOnSrcChange = true; // Mark that we intend to play this new song
    }

    // Only control play/pause if isPlaying state explicitly requires it OR
    // if a new song was just loaded and should start playing.
    if (isPlaying || shouldPlayOnSrcChange) {
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
            // If play fails (e.g., due to autoplay policy), set isPlaying to false
            setIsPlaying(false);
        });
    } else {
        audio.pause();
    }

    // Control mute
    audio.muted = isMuted;

    // Control loop
    audio.loop = isLooping;

    // Event listener for when the current song finishes
    const handleSongEnded = () => {
      setIsPlaying(false); // Set to paused when song ends
      // You could also implement logic here to play the next song automatically
      // playNextSong();
    };

    audio.addEventListener('ended', handleSongEnded);

    // Cleanup function: remove the event listener
    return () => {
      audio.removeEventListener('ended', handleSongEnded);
    };

    // Dependencies: currentSong (to load new songs), isPlaying (to pause/resume),
    // isMuted, isLooping (for player controls)
  }, [currentSong, isPlaying, isMuted, isLooping]);

  // Handler for the global play/pause button
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  // Handler for setting a new song (called by MusicBox)
  // This function is crucial for triggering play when a song is selected from the list.
  const handleSongSelect = (song: Song) => {
    setSong(song);
    // Explicitly set playing true when a new song is selected
    setIsPlaying(true);
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
    setIsPlaying(true); // Ensure it plays when switching to previous song
  };


  const musicLibrary: Song[] = [
    {
      id: "1",
      title: "Tu Chaiye",
      artist: "Atif Ashlam",
      duration: "3:22",
      albumArt: "/tuChaiye.jpg",
      song:'/tuChaiye.mp3'
    },
    {
      id: "2",
      title: "Humsafar",
      artist: "One Direction",
      duration: "4:05",
      albumArt: "/Humsafar.jpg",
      song:'/Humsafar.mp3'
    },
    {
      id: "3",
      title: "Perfect",
      artist: "One Direction",
      duration: "3:49",
      albumArt: "/perfect_album_art.jpg",
      song:'/audio/perfect.mp3'
    },
    {
      id: "4",
      title: "Live While We're Young",
      artist: "One Direction",
      duration: "3:22",
      albumArt: "/live_while_were_young_album_art.jpg",
      song:'/audio/live_while_were_young.mp3'
    },
  ];


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
      <div onPointerDown={event => controls.start(event)} className="h-[5%] flex items-center justify-between px-4 shrink-0 border-b border-gray-700 bg-gray-900">
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
              {musicLibrary.map((s) => (
                <MusicBox
                  key={s.id}
                  songData={s}
                  // No need to pass mute and loop props to MusicBox anymore
                />
              ))}
            </div>
          </div>
        </div>
        {/* Player Bar */}
        <div className="h-[12%] flex justify-between items-center bg-gray-800 px-4 py-2 border-t border-gray-700 shrink-0">
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
                <img src={isMuted ? "/mute.png" : "/volume_on.png"} alt="Mute" className="w-5 h-5 opacity-70 hover:opacity-100" />
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
                <img src={isLooping ? "/repeat_active.png" : "/repeatButton.png"} alt="Repeat" className="w-5 h-5 opacity-70 hover:opacity-100" />
              </button>
            </div>
            <div className="flex items-center w-full max-w-xl">
              <p className="text-gray-400 text-xs mr-2">0:19</p> {/* TODO: Make dynamic */}
              <div className="flex-grow h-1 bg-gray-600 rounded-full relative">
                <div
                  className="absolute left-0 top-0 h-full bg-green-500 rounded-full"
                  style={{ width: "calc((19 / 245) * 100%)" }}
                ></div>
                <div className="absolute left-[calc((19/245)*100%)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
              <p className="text-gray-400 text-xs ml-2">4:08</p> {/* TODO: Make dynamic */}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="100"
              className="w-24 h-1 bg-gray-600 rounded-full volume-slider"
              // TODO: Add onChange handler for volume control
            />
          </div>
        </div>
      </div>
      {/* This is the SINGLE, CENTRAL audio element for the entire application */}
      <audio ref={audioPlayerRef} className="hidden"></audio>
    </motion.div>
  );
}