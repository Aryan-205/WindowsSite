// store/featureSlice.ts or .js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  render: false
};

const featureSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    toggleSettings: (state) => {
      state.render = !state.render;
    }
  }
});

export const { toggleSettings } = featureSlice.actions;
export default featureSlice.reducer;