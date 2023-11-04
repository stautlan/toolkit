import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieId, fetchMovies } from '../api/movieApi'
import { Movie } from "../model/Movie";

interface FavoritesState {
    list: Movie[];
}

const initialState: FavoritesState = {
    list: [],
}

/*const search = async (title: string) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=64405bd2&s=${title}`);
        if (!response.ok) {
            throw new Error('error get');
        }
        const result = await response.json();
        return result;
    } catch (er) {
        console.error('search error: ' + er);
    }
}*/

export const search = async (value: string) => {
    const result = await fetchMovies(value);
    return result;
}

const favoritesSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        /*searchMovies(state, action: PayloadAction<string>) {
            //const result = search(action.payload.imdbID);
            //state.list.push(result)
            console.log('search ' + action.payload);
        },*/
        addToFavorites(state, action: PayloadAction<Movie>) {
            if (state.list.findIndex(p => p.imdbID === action.payload.imdbID) === -1)
                state.list = [...state.list, action.payload]
        },
        removeFromFavorites(state, action: PayloadAction<string>) {
            state.list = state.list.filter(p => p.imdbID !== action.payload);
        },
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;