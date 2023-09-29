import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    chachedSearch: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { chachedSearch } = searchSlice.actions;
export default searchSlice.reducer;
