import { useRef } from "react";
import useStore from "../store/feature";

interface ImusicBox {
  title: string;
  artist: string;
  url: string;
  duration:string;
  albumArt:string;
}

export function MusicBox({ song }: ImusicBox) {
  const setSong = useStore((state) => state.setSong);
  const audioRef = useRef<HTMLAudioElement>(null);

  function handlePlay() {
    setSong(song); // global store, fine
    audioRef.current?.play(); // play manually
  }

  return (
    <div
      className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800 cursor-pointer"
      onClick={handlePlay}
    >
      <div className="flex items-center flex-grow">
        {song.albumArt && (
          <img src={song.albumArt} alt="Album Art" className="w-10 h-10 mr-3 rounded" />
        )}
        <div>
          <p className="text-white text-base">{song.title}</p>
          <p className="text-gray-400 text-sm">{song.artist}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{song.duration}</p>

      {/* Hidden audio element */}
      <audio ref={audioRef} className="hidden" src={song.url}></audio>
    </div>
  );
}