import useStore from "../store/feature";

interface Song { 
  id: string;
  title: string;
  artist: string;
  duration:string;
  song: string;
  albumArt?: string;
}

interface MusicBoxProps {
  songData: Song;
}

export default function MusicBox({ songData }: MusicBoxProps) { 
  const setSong = useStore((state) => state.setSong);

  function handlePlay() {
    setSong(songData);
  }

  return (
    <div
      className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800 cursor-pointer"
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