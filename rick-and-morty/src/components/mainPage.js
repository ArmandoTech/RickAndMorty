export const MainPage = (props) => {
  const { image, charactersAPI, locationsAPI } = props;
  return (
    <>
      <img src={image} alt="Rick & Morty" className="img-home" />
      <div>
        <button onClick={charactersAPI} className="btn-search">
          Characters
        </button>
        <span> </span>
        <button onClick={locationsAPI} className="btn-search">
          Locations
        </button>
      </div>
    </>
  );
};
