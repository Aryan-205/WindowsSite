// src/components/MusicBox.tsx
import useStore from "../store/feature";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  song: string; // Path/URL to the audio file
  albumArt?: string;
}

interface MusicBoxProps {
  songData: Song;
}

export default function MusicBox({ songData }: MusicBoxProps) {
  // Use setCurrentSong from the store
  const setSong = useStore((state) => state.setSong);
  const currentSong = useStore((state) => state.currentSong);

  function handlePlay() {
    setSong(songData); // Set the clicked song as the current song
  }

  // Highlight the currently playing song
  const isActive = currentSong?.id === songData.id;

  return (
    <div
      className={`flex items-center gap-4 px-4 py-2 hover:bg-gray-800 cursor-pointer w-full ${isActive ? 'bg-gray-700' : ''}`}
      onClick={handlePlay}
    >
      <div className="flex items-center flex-grow">
        {songData.albumArt && (
          <img src={songData.albumArt} alt="Album Art" className="w-10 h-10 mr-3 rounded" />
        )}
        <div>
          <p className="text-white text-base">{songData.title}</p>
          <p className="text-gray-400 text-sm">{songData.artist}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{songData.duration}</p>
    </div>
  );
}