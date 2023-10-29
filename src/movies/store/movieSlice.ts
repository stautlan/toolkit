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
    list: data_movies.Search, //[],
    isLoading: false,
    error: null,
}

/*const fetchMovies = createAsyncThunk( //async (id: string) => {
    "movies/search",
    async (query: string) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=64405bd2&=${id}`);
        if (!response.ok) {
            throw new Error('error get');
        }
        const jsonData = await response.json();
        //return result;
        setMovies(jsonData.map((item: Movie) => ({ 
            Title: item.Title,
            Director: item.Director,
            Genre: item.Genre,
            imdbID: item.imdbID,
            imdbRating: item.imdbRating,
            Poster: item.Poster,
            Year: item.Year,
         })));
    } catch (er) {
        console.error('getMovieId error: ' + er);
    }
});*/

/*async function request<TResponse>(
    url: string, 
    config: RequestInit
  ): Promise<TResponse> {
    try {
      const response = await fetch(url, config);
      return await response.json();
    }
    catch (error) {
      // Handle the error.
    }
  }*/

/*const [movies, setMovies] = useState<Movie[]>([]);
const [selectMovie, setSelectMovie] = useState<Movie>({
    Title: '',
    Director: '',
    Genre: '',
    imdbID: '',
    imdbRating: '',
    Poster: '',
    Year: '',
})*/

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
        const response = await getMovieId(query);
        return response;
    }
)

//--------------------------------//
////////// ¯\_(ツ)_/¯ \\\\\\\\\\\\\\
/*useEffect(() => {
    const api = async (id: string) => {
        const data = await fetchMovies(id);
        setMovies(data.map())
    }
}, [selectMovie]);*/

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getMovies(state, action: PayloadAction<string>) {
            /*if (action.payload !== '') {
                state.list = searchMovies(action.payload); //fetchMovies(action.payload);
            }
            */
        },
        pointMovies(state, action: PayloadAction<string>) {
            if (action.payload !== "") {
                const filmResult = searchIdMovies(action.payload);
                debugger

            }
        },
        addFavorite(state, action: PayloadAction<Movie>) {
            //console.log('addMovies(): none');
            if (action.payload?.imdbID !== '') {
                const filmResult = searchIdMovies(action.payload.imdbID);
                
                const item = state.list.filter(p => p.imdbID === action.payload.imdbID);
                state.list.push(action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchMovies.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(searchMovies.fulfilled, (state, action) => { //: PayloadAction<Movie[]>
            state.isLoading = false;
            debugger
            state.list = action.payload;
        })
        .addCase(searchMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || "Something went wrong";
        });
    }
})

export const { getMovies, pointMovies, addFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;