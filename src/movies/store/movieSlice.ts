import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies, getMovieId } from "../api/movieApi";
import { Movie } from "../model/Movie";
import { data_movies } from "../api/data/data_movie";

interface MovieState {
    list: Movie[];
    isLoading: boolean;
    error: string | null;
}

const initialState: MovieState = {
    list: [], //data_movies.Search, //[],
    isLoading: false,
    error: null,
}

export const searchMovies = createAsyncThunk(
    "movies/search",
    async (query: string) => {
      const response = await fetchMovies(query);
      return response;
    }
  );

export const searchIdMovies = createAsyncThunk(
    "movies/searchId",
    async (query: string) => {
        debugger
        const response = await getMovieId(query);
        console.log(response)
        return response;
    }
)

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        /*getMovies(state, action: PayloadAction<string>) {
            //if (action.payload !== '') {
            //    state.list = searchMovies(action.payload); //fetchMovies(action.payload);
            //}
        },*/
        pointMovies(state, action: PayloadAction<string>) {
            if (action.payload !== "") {
                debugger
                const filmResult = searchIdMovies(action.payload);
                console.log(filmResult)
            }
        },
        /*addFavorite(state, action: PayloadAction<Movie>) {
            //console.log('addMovies(): none');
            if (action.payload?.imdbID !== '') {
                //const filmResult = searchIdMovies(action.payload.imdbID);
                
                //const item = state.list.filter(p => p.imdbID === action.payload.imdbID);
                //state.list.push(action.payload);
            }
        },*/
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchMovies.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(searchMovies.fulfilled, (state, action) => { //: PayloadAction<Movie[]>
            state.isLoading = false;
            state.list = action.payload.Search;
        })
        .addCase(searchMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || "Something went wrong";
        });
    }
})

export const { pointMovies/*, addFavorite*/ } = moviesSlice.actions;

export default moviesSlice.reducer;