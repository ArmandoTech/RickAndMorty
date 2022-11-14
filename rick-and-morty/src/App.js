import { useState } from "react";
import "./App.css";
import { Characters } from "./components/characters.js";
import { Location } from "./components/locations.js";
import { MainPage } from "./components/mainPage.js";
import rickAndMortyImage from "./images/rick-morty.png";

function App() {
  const [characters, setCharacters] = useState(null);
  const [locations, setLocations] = useState(null);

  const charactersAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const response = await api.json();
    setCharacters(response.results);
  };

  const locationsAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/location");
    const response = await api.json();
    setLocations(response.results);
  };
  console.log(locations);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {!characters && !locations ? (
          <MainPage
            image={rickAndMortyImage}
            charactersAPI={charactersAPI}
            locationsAPI={locationsAPI}
          />
        ) : characters ? (
          <>
            <Characters characters={characters} setCharacters={setCharacters} />
          </>
        ) : locations ? (
          <Location locations={locations} setLocations={setLocations} />
        ) : null}
      </header>
    </div>
  );
}

export default App;
