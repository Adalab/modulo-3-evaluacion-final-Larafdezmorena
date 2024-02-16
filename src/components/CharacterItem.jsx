import { ReactPropTypes } from "prop-types";
function CharacterItem({ photo, name, race }) {
  return (
    <>
      <img className="characters__image" src="" alt="Foto de Harry Potter" />
      {photo}
      <h2 className="characters__name">{name}</h2>
      <h3 className="character__race">{race}</h3>
    </>
  );
}

CharacterItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  race: PropTypes.string,
};
export default CharacterItem;
