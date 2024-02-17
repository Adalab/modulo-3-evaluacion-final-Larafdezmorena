import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
function CharacterItem({ photo, name, race, id }) {
  return (
    <Link to={"/character/" + id}>
      <>
        <img
          className="characters__image"
          src={photo}
          alt="Foto de Harry Potter"
        />

        <h2 className="characters__name">{name}</h2>
        <h3 className="characters__race">{race}</h3>
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
