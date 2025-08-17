
import useStore from '../store/feature';
import MusicBox from './MusicBox';

interface VolumeControlProps {
}

export default function Volume({}: VolumeControlProps) {
  const currentSong = useStore((state) => state.currentSong);
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);
  const nightLight = useStore((state) => state.nightLight);

  const globalVolume = useStore((state) => state.globalVolume);
  const setGlobalVolume = useStore((state) => state.setGlobalVolume);

  return (
    <>
      <div className='absolute inset-0' onClick={clearActiveComponent} />
      <div className={`p-6 absolute bottom-0 right-0 rounded-lg shadow-lg flex flex-col items-center space-y-4 font-inter w-full max-w-sm mx-auto ${nightLight ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
        <h2 className={`text-xl font-semibold ${nightLight ? "text-white" : "text-gray-900"}`}>Volume Control</h2>

        {/* Display current song info  */}
        {currentSong && <MusicBox key={currentSong.id} songData={currentSong} />}
        {!currentSong && <p className={`text-sm ${nightLight ? "text-gray-400" : "text-gray-500"}`}>No song playing</p>}


        {/* Volume Slider */}
        <div className="flex items-center w-full space-x-3">
          <span className={`text-sm w-10 text-right ${nightLight ? "text-gray-300" : "text-gray-700"}`}>{Math.round(globalVolume * 100)}%</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={globalVolume}
            onChange={(e) => setGlobalVolume(parseFloat(e.target.value))}
            className={`flex-grow h-2 rounded-full appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none
                       [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none
                       ${nightLight ? "bg-gray-600" : "bg-gray-300"}`}
          />
        </div>
      </div>
    </>
  );
}