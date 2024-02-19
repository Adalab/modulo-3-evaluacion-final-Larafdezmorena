import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
function CharacterItem({ photo, name, race, id }) {
  return (
    <Link to={"/character/" + id}>
      <>
        <img
          className="characters__image"
          src={
            photo
              ? photo
              : " https://via.placeholder.com/210x295//666666/?text=HarryPotter"
          }
          alt="Foto de ${name}"
        />

        <h2 className="characters__name">{name}</h2>
        <h3 className="characters__species">{race}</h3>
      </>
    </Link>
  );
}

CharacterItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  race: PropTypes.string,
  id: PropTypes.string,
};
export default CharacterItem;
