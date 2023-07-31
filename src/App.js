import { useEffect, useState } from "react";
import "./App.css";
import BotsCollection from "./Components/BotsCollection";
import FavouriteBots from "./Components/FavouriteBots";

function App() {

const [showBots, setShowBots] = useState([])
const [favourites , setFavourites] = useState([])


useEffect(() => {
    console.log("Test UseEffects")

    fetch("http://localhost:8000/bots")
    .then((Response) => Response.json())
    .then((AllBots) => {
      console.log(AllBots);
      setShowBots(AllBots);
    });


} , [])

function handleFavourites (favourite) {
    if (!favourites.includes(favourite)){
        setFavourites([...favourites, favourite])
    }
// console.log(favourite);
}
  
function handleDeleteFavourite (id) {
    console.log(id)
     setFavourites(favourites.filter(favourite => {
        return (
            favourite.id !== id
        )
     }))
}

  return (
    <div className="App">
      <FavouriteBots favourites = {favourites} handleDeleteFavourite = {handleDeleteFavourite} />
      <BotsCollection showBots={showBots} handleFavourites = {handleFavourites} />
    </div>
  );
}

export default App;
