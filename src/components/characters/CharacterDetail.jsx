import { PropTypes } from "prop-types";
import { Link, useParams } from "react-router-dom";

import { mapStatus } from "../services/map";

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
        <li className="card__name">{character.name}</li>
        <li className="card__detail">Estatus: {mapStatus(character.alive)}</li>
        <li className="card__detail">Especie: {character.species}</li>
        <li className="card__detail">
          Género: {""}
          {character.gender === "male" ? "Hombre" : "Mujer"}
        </li>
        <li className="card__detail">Casa: {character.house}</li>
      </ul>
      <Link className="card__back" to="/">
        ⬅️ Volver
      </Link>
    </div>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func,
};
export default CharacterDetail;
