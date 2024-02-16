import PropTypes from "prop-types";

import CharacterItem from "./CharacterItem";

function CharactersList({ charactersList }) {
  const charactersHtml = charactersList.map((item, id) => (
    <li key={id} className="character__item">
      <CharacterItem photo={item.image} name={item.name} race={item.species} />
    </li>
  ));

  return <ul className="characters__list">{charactersHtml}</ul>;
}

CharactersList.propTypes = {
  charactersList: PropTypes.array,
};

export default CharactersList;
