export const Characters = (props) => {
  const { characters, setCharacters } = props;

  const goBackHome = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Characters</h1>

      <div className="container-characters">
        {characters.map((element, index) => {
          return (
            <div className="character-container" key={index}>
              <div>
                <img src={element.image} alt={element.name} />
              </div>
              <div>
                <h3>{element.name}</h3>
                <h6>
                  {element.status === "Alive" ? (
                    <>
                      <span className="alive"></span>
                      Alive
                    </>
                  ) : (
                    <>
                      <span className="dead"></span>
                      Dead
                    </>
                  )}
                </h6>
                <p>
                  <span className="text-grey">Specie: </span>
                  <span>{element.species}</span>
                </p>
                <p>
                  <span className="text-grey">Origin: </span>
                  <span>{element.origin.name}</span>
                </p>
                <p>
                  <span className="text-grey">Location:</span>
                  <span>{element.location.name}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-search" onClick={goBackHome}>
        Home
      </button>
    </div>
  );
};
