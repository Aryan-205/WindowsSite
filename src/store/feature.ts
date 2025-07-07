import {create} from 'zustand'

interface Song {
  id: string;
  title: string;
  artist: string;
  duration:string;
  url: string;
  coverImage?: string;
}

interface StoreState {
  activeComponent: string | null;
  setActiveComponent: (component: string) => void;
  clearActiveComponent: () => void;
  currentSong: null | Song;
  setSong:(comp:Song) => void
}

const useStore = create<StoreState>((set) => ({
  activeComponent: null,
  setActiveComponent: (comp) => set({ activeComponent: comp }),
  clearActiveComponent: () => set({ activeComponent: null }),
  currentSong:null,
  setSong:(song)=>set({currentSong:song})
}));

export default useStore