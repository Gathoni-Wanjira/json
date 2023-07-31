import React from 'react'
import FavouriteCard from './FavouriteCard';


function FavouriteBots({favourites, handleDeleteFavourite}) {
  return (
    <div className = "FavBots">
        
        {favourites.map((favourite) => {
        
        return <FavouriteCard handleDeleteFavourite = {handleDeleteFavourite} favourites = {favourite} key = {favourite.id}/>;
      })}
    </div>
  )
}

export default FavouriteBots;
