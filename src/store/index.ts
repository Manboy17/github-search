import { githubReducer } from "./github/githubSlice";
import { configureStore } from "@reduxjs/toolkit";
import { githubAPi } from "./api/githubApi";

export const store = configureStore({
  reducer: {
    [githubAPi.reducerPath]: githubAPi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubAPi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
