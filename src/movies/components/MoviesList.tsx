import { useAppSelector } from '../hook'
import { useAppDispatch } from '../hook';
import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem'
import { getMovies } from '../store/movieSlice'

type Props = {}

const MoviesList = (props: Props) => {
  const movies = useAppSelector(state => state.movies);
  const [filter, setFilter] = useState('Terminator');
  const dispatch = useAppDispatch();

  /*const fetchMovies = async(name: string) => {
    const response = await fetch()
  }*/

  //useEffect(() => {
  //  dispatch(getMovies(filter));
  //}, []) //filter

  //function handleClick(event: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
    //throw new Error('Function not implemented.');
  //}
  function handleClick() {
    //dispatch(getMovies(filter));
  }

  return (
    <div>
      <label>
        Фильтр
        <input value={filter}/>
        <input type='button' value='...' onClick={(handleClick)}/>
      </label>
      <ul>{movies.list.map((m) => (
        <MovieItem 
          key={m.imdbID}
          {...m}
        />
      ))}</ul>
    </div>
  )
}

export default MoviesList;