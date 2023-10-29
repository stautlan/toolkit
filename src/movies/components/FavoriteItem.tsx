import React from 'react';
import { useAppDispatch } from '../hook';
import { removeFromFavorites } from '../store/favoriteSlice'; 
import { Movie } from '../model/Movie';

type Props = {item: Movie}

const FavoriteItem = ({item}: Props) => {
    const dispatch = useAppDispatch();

  return (
    <div>
        <li>
            <div>{item.Title}</div>
            <div>{item.Year}</div>
            <img src={item.Poster} width='60' height='100%'></img>
            {/* <div>{item.imdbID}</div> */}
            <br />
            <button onClick={() => dispatch(removeFromFavorites(item.imdbID))}>Удалить</button>
        </li>
    </div>
  )
}

export default FavoriteItem