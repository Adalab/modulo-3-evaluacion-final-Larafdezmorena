import CharacterItem from "./CharacterItem";

function CharactersList() {
  return (
    <ul className="characters__list">
      <li className="character__list">
        <CharacterItem photo="" name="Harry" race="humano" />
      </li>
      <li className="character__list">
        <img className="characters__image" src="" alt="Foto de Hermione" />
        <h2 className="characters__name">Hermione</h2>
        <h3 className="character__race">Humano</h3>
      </li>
      <li className="character__list">
        <img className="characters__image" src="" alt="Foto de Ron" />
        <h2 className="characters__name">Ron</h2>
        <h3 className="character__race">Humano</h3>
      </li>
    </ul>
  );
}

export default CharactersList;
