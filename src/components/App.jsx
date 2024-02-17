import { useState } from "react";

import Filters from "./filters/Filters";
import CharactersList from "./characters/CharactersList";
import Header from "./Header";
import Footer from "./Footer";
import CharacterDetail from "./CharacterDetail";

import charactersOriginal from "../data/characters.json";

import "../scss/App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  const [charactersList] = useState(charactersOriginal);

  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterCharacter, setFilterCharacter] = useState("");

  const handleFilter = (filterName, value) => {
    console.log(filterName);
    console.log(value);

    if (filterName === "character") {
      setFilterCharacter(value);
    } else if (filterName === "house") setFilterHouse(value);
  };

  const filteredCharactersByHouses = charactersList.filter((house) => {
    return house.house === filterHouse;
  });

  const filteredTotal = filteredCharactersByHouses.filter((character) =>
    character.name.includes(filterCharacter)
  );

  const findCharacter = (value) => {
    return charactersList.find((character) => character.id === value);
  };

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters handleFilter={handleFilter} />
              <CharactersList charactersList={filteredTotal} />
            </>
          }
        />
        <Route
          path="/character/:id"
          element={
            <CharacterDetail
              findCharacter={findCharacter}
              charactersList={charactersList}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
