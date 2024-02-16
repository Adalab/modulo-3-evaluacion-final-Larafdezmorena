import { useState } from "react";

import Filters from "./Filters";
import CharactersList from "./CharactersList";

import charactersOriginal from "../data/characters.json";

import "../scss/App.scss";

function App() {
  const [charactersList] = useState(charactersOriginal);

  const [filterHouse, setFilterHouse] = useState("all");
  const [filterCharacter, setFilterCharacter] = useState("");

  const handleFilter = (filterName, value) => {
    console.log(filterName);
    console.log(value);

    if (filterName === "character") {
      setFilterCharacter(value);
    } else if (filterName === "house") setFilterHouse(value);
  };

  const filteredCharactersByHouses = charactersList.filter((house) => {
    if (filterHouse === "all") {
      return true;
    } else {
      return house.house === filterHouse;
    }
  });

  const filteredTotal = filteredCharactersByHouses.filter((character) =>
    character.name.includes(filterCharacter)
  );

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Personajes de Harry Potter</h1>
        <Filters handleFilter={handleFilter} />
      </header>
      <CharactersList charactersList={filteredTotal} />

      <footer className="footer">
        <img src="" alt="logo carta" />
      </footer>
    </div>
  );
}

export default App;
