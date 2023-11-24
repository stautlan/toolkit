import { useAppSelector } from '../hook'
import { useAppDispatch } from '../hook';
import { useState } from 'react'
import MovieItem from './MovieItem'
import { searchMovies } from '../store/movieSlice'

const MoviesList = () => {
  const movies = useAppSelector(state => { console.log(state.movies.error); return state.movies});
  const [filter, setFilter] = useState('');
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(searchMovies(filter));
  }

  return (
    <div>
      <label>
        Фильтр 
        <input value={filter} onChange={e => setFilter(e.target.value)} /> {/* defaultValue='Введите слово' value={filter} */}
        <input type='button' value='Поиск' onClick={(handleClick)}/>
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