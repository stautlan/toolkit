import './App.css'
import FavoriteList from './movies/components/FavoriteList';
import MoviesList from './movies/components/MoviesList';
//import { Movie } from './movies/model/Movie';
//import { useState, useEffect } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <div className='div-menu'>
        <Routes>
          <Route
            path='/'
            element={<MoviesList />}
          />
          <Route
            path='/filter'
            element={<FavoriteList />}
          />
        </Routes>
      </div>
    </>
  )
}

const Header = () => {
  return (
    <div className='Header'>
      {' '}
      <NavLink to='/'>Поиск</NavLink>
      {' '}
      <NavLink to='/filter'>Избранное</NavLink>
    </div>
  )
}

export default App