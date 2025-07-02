import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  activeComponent: string | null; 
}

const initialState: AppState = {
  activeComponent: null, 
};

export const featureSlice = createSlice({
  name: 'features', 
  initialState,
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
    clearActiveComponent: (state) => {
      state.activeComponent = null;
    },
  },
});

export const { setActiveComponent, clearActiveComponent } = featureSlice.actions;

export default featureSlice.reducer;