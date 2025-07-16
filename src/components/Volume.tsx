import useStore from '../store/feature';
import MusicBox from './MusicBox'; 

interface VolumeControlProps {
}

export default function Volume({}: VolumeControlProps) {

  const currentSong = useStore((state) => state.currentSong); // To display current song
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);

  const globalVolume = useStore((state) => state.globalVolume);
  const setGlobalVolume = useStore((state) => state.setGlobalVolume);

  return (
    <>
      <div className='absolute inset-0' onClick={clearActiveComponent} />
      <div className="p-6 absolute bottom-0 right-0 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center space-y-4 font-inter text-gray-200 w-full max-w-sm mx-auto">
        <h2 className="text-xl font-semibold text-white">Volume Control</h2>

        {/* Display current song info (MusicBox here just renders the song details, not play/pause) */}
        {currentSong && <MusicBox key={currentSong.id} songData={currentSong} />}
        {!currentSong && <p className="text-gray-400 text-sm">No song playing</p>}


        {/* Volume Slider */}
        <div className="flex items-center w-full space-x-3">
          <span className="text-sm w-10 text-right">{Math.round(globalVolume * 100)}%</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={globalVolume}
            onChange={(e) => setGlobalVolume(parseFloat(e.target.value))}
            className="flex-grow h-2 bg-gray-600 rounded-full appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none
                       [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none"
          />
        </div>
        {/* Remove Play/Pause button from here as Spotify handles it */}
      </div>
    </>
  );
}