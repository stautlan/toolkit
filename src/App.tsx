import './App.css'
import FavoriteList from './movies/components/FavoriteList';
import MoviesList from './movies/components/MoviesList';
//import { Movie } from './movies/model/Movie';
//import { useState, useEffect } from 'react'

function App() {
  //const [movies, setMovies] = useState<Movie[]>();

  /*const fetchMovies = async (title: string) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=64405bd2&s=${title}`);
        if (!response.ok) {
            throw new Error('error get');
        }
        const result = await response.json();
        setMovies(result);
        //return result;
        } catch (er) {
            console.error('getSearchMovieTitle error: ' + er);
        }
    }
    useEffect(() => {
      fetchMovies('Terminator');
    }, [])*/

  return (
    <>
      {/* {movies?.map((item) => (
        <div>
        <div>{item.Title}</div>
        <div id={item.imdbID}>{item.Poster}</div>
        </div>
      ))}
      <FavoriteList /> */}
      <MoviesList />
      <FavoriteList />
    </>
  )
}

export default App