import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./MoviesSlice";
import languageReducer from "./LangSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    language: languageReducer,
  },
});

export default appStore;