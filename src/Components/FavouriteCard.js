import React from "react";

function FavouriteCard({ favourites, handleDeleteFavourite }) {
  const {
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
    avatar_url,
    id,
  } = favourites;

  function handleClickFavourite(e) {
    handleDeleteFavourite(id);
  }

  return (
    <div className="Botcard" onClick={handleClickFavourite}>
      <i className="fa-solid fa-xmark closeIcon"></i>
      <img src={avatar_url} alt="Bot Image " />

      <div className="allinclusive">
        <h3 className="Botname">{name}</h3>
        <p className="Catchphrase">{catchphrase}</p>

        <hr />

        <div className="icons-section">
          <div className="health-checkin">
            <i class="fa-solid fa-heart-pulse"></i>
            <p className="health">{health}</p>
          </div>

          <div className="damage-checkin">
            <i class="fa-solid fa-bolt"></i>
            <p className="damage">{damage}</p>
          </div>

          <div className="armor-checkin">
            <i class="fa-solid fa-shield-halved"></i>
            <p className="armor">{armor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteCard;
