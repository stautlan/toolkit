import React from 'react'
import { useAppSelector } from '../hook'
import FavoriteItem from './FavoriteItem'

type Props = {}

const FavoriteList = (props: Props) => {
  const favorites = useAppSelector(state => state.favorites)
  return (
    <>
    <label htmlFor='lbl'>FavoriteList</label>
    <ul>
      {favorites.list.map(p => (
        <FavoriteItem 
          key={p.imdbID}
          item={p}
        />
      ))}</ul>
    </>
  )
}

export default FavoriteList;