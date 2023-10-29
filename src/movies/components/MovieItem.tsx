import React from 'react';
import { useAppDispatch } from '../hook';
import { addFavorite, pointMovies } from '../store/movieSlice'
import { addToFavorites } from '../store/favoriteSlice'
import { Movie } from '../model/Movie';

/*interface MovieItemProps {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}*/

const MovieItem: React.FC<Movie> = ({ Title, Year, imdbID, Type, Poster }) => {
    const dispatch = useAppDispatch();

  return (
    <li>
      <hr />
        <div>{Title}</div>
        <div>{Year}</div>
        {/* <div>{imdbID}</div> */}
        <div>{Type}</div>
        <img src={Poster} width={100} height={'100%'}></img>
        <button onClick={() => dispatch(pointMovies(imdbID))}>Выбрать</button>
        <button onClick={() => dispatch(addToFavorites(
          {
            Title: Title, 
            Year: Year,
            imdbID: imdbID,
            Type: Type,
            Poster: Poster,
          }))}>Добавить в избранное</button>
    </li>
  )
}

export default MovieItem