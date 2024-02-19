//React imports
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//Components imports
import Filters from "./filters/Filters";
import CharactersList from "./characters/CharactersList";
import Header from "./Header";
import Footer from "./Footer";
import CharacterDetail from "./CharacterDetail";

import { fetchCharacters } from "./services/fetch";
import "../scss/App.scss";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [filterCharacter, setFilterCharacter] = useState("");

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharactersList(data);
    });
  }, []);

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
