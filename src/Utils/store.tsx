import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
