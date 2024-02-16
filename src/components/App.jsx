import { useState } from "react";

import Filters from "./Filters";
import CharactersList from "./CharactersList";

import charactersOriginal from "../data/characters.json";

import "../scss/App.scss";

function App() {
  const [charactersList] = useState(charactersOriginal);

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Personajes de Harry Potter</h1>
        <Filters />
      </header>
      <CharactersList charactersList={charactersList} />

      <footer className="footer">
        <img src="" alt="logo carta" />
      </footer>
    </div>
  );
}

export default App;
