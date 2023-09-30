import { createSlice } from "@reduxjs/toolkit";

interface LiveMessage {
  name: string;
  message: string;
}
type InitialStateProps = {
  messages: LiveMessage[];
};

const initialState: InitialStateProps = {
  messages: [],
};
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(9, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
