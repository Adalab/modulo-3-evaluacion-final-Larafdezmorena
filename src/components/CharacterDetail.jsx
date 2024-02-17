import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);
  return (
    <div className="card">
      <img
        className="card__image"
        src={character.image}
        alt="Foto de Harry Potter"
      />
      <ul className="card__list">
        <li className="card__detail">{character.name}</li>
        <li className="card__detail">Estatus: {character.alive}</li>
        <li className="card__detail">Especie: {character.species}</li>
        <li className="card__detail">Género: {character.gender}</li>
        <li className="card__detail">Casa: {character.house}</li>
      </ul>
    </div>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func,
};
export default CharacterDetail;
