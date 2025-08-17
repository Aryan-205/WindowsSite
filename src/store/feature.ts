import {create} from 'zustand'

interface Song {
  id: string;
  title: string;
  artist: string;
  duration:string;
  song: string;
  albumArt?: string;
}

interface StoreState {
  activeComponent: string | null;
  setActiveComponent: (component: string) => void;
  clearActiveComponent: () => void;

  currentSong: null | Song;
  setSong:(comp:Song) => void

  globalVolume:number
  setGlobalVolume:(v:number)=>void

  wallpaper:string
  setWallpaper:(newW:string)=>void

  nightLight:boolean
  toggleNightLight:(nightLight:boolean)=>void;
}

const useStore = create<StoreState>((set) => ({
  activeComponent: null,
  setActiveComponent: (comp) => set({ activeComponent: comp }),
  clearActiveComponent: () => set({ activeComponent: null }),

  currentSong:null,
  setSong:(song)=>set({currentSong:song}),

  globalVolume:0.5,
  setGlobalVolume:(volume)=>set({globalVolume:volume}),

  wallpaper:'/wallpaper.webp',
  setWallpaper:(newW)=>set({wallpaper:newW}),

  nightLight:false,
  toggleNightLight:(prev:boolean)=>set({nightLight:!prev})
}));

export default useStore