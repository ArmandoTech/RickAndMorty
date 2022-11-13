import { useState } from "react";
import "./App.css";
import { Characters } from "./components/characters.js";
import rickAndMortyImage from "./images/rick-morty.png";

function App() {
  const [characters, setCharacters] = useState(null);

  const charactersAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const response = await api.json();
    setCharacters(response.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              src={rickAndMortyImage}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={charactersAPI} className="btn-search">
              Search characters
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
