import React from 'react'
import { useAppDispatch } from '../hook';
import { removeFromFavorites } from '../store/favoriteSlice';

interface SelectItemProps {
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Poster: string;
    imdbID: string;
    imdbRating: string;
}

const SelectItem: React.FC<SelectItemProps> = ({Title, Year, Genre, Director, Poster, imdbID, imdbRating}) => {
    const dispatch = useAppDispatch();

  return (
    <div>
        <div>{Title}</div>
        <div>{Year}</div>
        <div>{Genre}</div>
        <div>{Director}</div>
        <div>{Poster}</div>
        <div>{imdbID}</div>
        <div>{imdbRating}</div>
        <button onClick={() => dispatch(removeFromFavorites(imdbID))}>
            Удалить
        </button>
    </div>
  )
}

export default SelectItem