import Filters from "./Filters";
import CharactersList from "./CharactersList";

import "../scss/App.scss";

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Personajes de Harry Potter</h1>
        <Filters />
      </header>
      <CharactersList />

      <footer className="footer">
        <img src="" alt="logo carta" />
      </footer>
    </div>
  );
}

export default App;
