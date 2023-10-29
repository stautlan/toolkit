import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice';
import favoriteReducer from "./favoriteSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        favorites: favoriteReducer,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;