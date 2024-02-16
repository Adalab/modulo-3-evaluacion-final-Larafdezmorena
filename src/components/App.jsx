import { useState } from "react";

import Filters from "./Filters";
import CharactersList from "./CharactersList";

import charactersOriginal from "../data/characters.json";

import "../scss/App.scss";

function App() {
  const [charactersList] = useState(charactersOriginal);
  const [filterHouse, setFilterHouse] = useState("all");

  const handleFilter = (value) => {
    console.log(value);
    setFilterHouse(value);
  };

  const filteredHouses = charactersList.filter((house) => {
    if (filterHouse === "all") {
      return true;
    } else {
      return house.house === filterHouse;
    }
  });

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Personajes de Harry Potter</h1>
        <Filters handleFilter={handleFilter} />
      </header>
      <CharactersList charactersList={filteredHouses} />

      <footer className="footer">
        <img src="" alt="logo carta" />
      </footer>
    </div>
  );
}

export default App;
