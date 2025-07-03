import {create} from 'zustand'

const useStore = create((set)=>({
  activeComponent:'',
  setActiveComponent:(comp:string)=>set({activeComponent:comp}),
  clearActiveComponent:()=>set({activeComponent:''})
}))
export default useStore