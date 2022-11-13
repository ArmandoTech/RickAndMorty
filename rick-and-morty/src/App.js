import "./App.css";
import rickAndMortyImage from "./images/rick-morty.png";

const clicks = () => {
  console.log("click");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={rickAndMortyImage} alt="Rick & Morty" className="img-home" />
        <button onClick={clicks} className="btn-search">
          Search characters
        </button>
      </header>
    </div>
  );
}

export default App;
