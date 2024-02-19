import { PropTypes } from "prop-types";
import { Link, useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);
  return (
    <div className="card">
      <img
        className="card__image"
        src={
          character.image
            ? character.image
            : "https://via.placeholder.com/210x295//666666/?text=HarryPotter"
        }
        alt={character.name}
      />
      <ul className="card__list">
        <li className="card__detail">{character.name}</li>
        <li className="card__detail">Estatus: {character.alive}</li>
        <li className="card__detail">Especie: {character.species}</li>
        <li className="card__detail">Género: {character.gender}</li>
        <li className="card__detail">Casa: {character.house}</li>
      </ul>
      <Link to="/">Volver</Link>
    </div>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func,
};
export default CharacterDetail;
