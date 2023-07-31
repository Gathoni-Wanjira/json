import React from "react";
import BotCard from "./BotCard";

function BotsCollection({ showBots , handleFavourites}) {
    
  return (
    <div className="BotsCollection">
      

      {showBots.map((oneBot) => {
        
        return <BotCard oneBot = {oneBot} key = {oneBot.id} handleFavourites = {handleFavourites}/>;
      })}
    </div>
  );
}

export default BotsCollection;
