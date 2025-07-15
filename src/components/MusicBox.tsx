import useStore from "../store/feature";
// Remove useRef and useState imports as they're not needed here for audio control
// import { useRef, useState } from "react"; // Remove this line

interface Song { // This interface should be consistent across files or imported
  id: string;
  title: string;
  artist: string;
  duration:string;
  song: string;
  albumArt?: string;
}

interface MusicBoxProps {
  songData: Song;
  // Remove mute and loop props from here, as they are global player controls,
  // not specific to an individual MusicBox item.
  // mute: boolean;
  // loop: boolean;
}

export default function MusicBox({ songData }: MusicBoxProps) { // Only songData is needed now
  const setSong = useStore((state) => state.setSong);
  // audioRef is no longer needed here
  // const audioRef = useRef<HTMLAudioElement>(null); // Remove this line

  function handlePlay() {
    // When a MusicBox is clicked, its only job is to tell the global store
    // which song should be the current song. The Spotify component will
    // then handle playing this song.
    setSong(songData);
    // Remove direct audio play call here
    // audioRef.current?.play(); // Remove this line
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

      {/* REMOVE THE AUDIO ELEMENT FROM HERE! It will now live in Spotify.tsx */}
      {/* <audio loop={loop} muted={mute} ref={audioRef} className="hidden" src={songData.song}></audio> */}
    </div>
  );
}