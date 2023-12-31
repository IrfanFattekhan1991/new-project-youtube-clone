import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
export interface ToggleState {
  isMenuOpen: boolean;
}
// Define the initial state using that type
const initialState: ToggleState = {
  isMenuOpen: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
