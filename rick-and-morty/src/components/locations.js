export const Location = (props) => {
  const { locations, setLocations } = props;

  const goBackHome = () => {
    setLocations(null);
  };
  return (
    <div className="characters">
      <h1>Locations</h1>

      <div className="container-characters">
        {locations.map((element, index) => {
          return (
            <div className="character-container" key={index}>
              <div>
                <h3>{element.name}</h3>
                <p>
                  <span className="text-grey">Dimension: </span>
                  <span>{element.dimension}</span>
                </p>
                <p>
                  <span className="text-grey">Type: </span>
                  <span>{element.type}</span>
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
