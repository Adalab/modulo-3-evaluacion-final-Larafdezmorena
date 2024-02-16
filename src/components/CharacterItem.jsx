import { PropTypes } from "prop-types";
function CharacterItem({ photo, name, race }) {
  return (
    <>
      <img
        className="characters__image"
        src={photo}
        alt="Foto de Harry Potter"
      />

      <h2 className="characters__name">{name}</h2>
      <h3 className="characters__race">{race}</h3>
    </>
  );
}

CharacterItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  race: PropTypes.string,
};
export default CharacterItem;
