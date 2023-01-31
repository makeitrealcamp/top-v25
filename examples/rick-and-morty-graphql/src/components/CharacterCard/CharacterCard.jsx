import "./styles.css";

const CharacterCard = ({ character }) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img src={character.image} alt="Blue Footprint Guy" />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{character.name}</h2>
        <span className="status">
          <span
            className={`status__icon ${
              character.status === "Dead" ? "status__dead" : "status__alive"
            }`}
          ></span>
          {character.status} - {character.species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={character.origin.url}>{character.origin.name}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={character.location.url}>{character.location.name}</a>
      </div>
    </div>
  </article>
);

export default CharacterCard;
