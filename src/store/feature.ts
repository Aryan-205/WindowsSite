import {create} from 'zustand'

interface StoreState {
  activeComponent: string | null;
  setActiveComponent: (component: string) => void;
  clearActiveComponent: () => void;
}

const useStore = create<StoreState>((set) => ({
  activeComponent: null,
  setActiveComponent: (comp) => set({ activeComponent: comp }),
  clearActiveComponent: () => set({ activeComponent: null }),
}));

export default useStore