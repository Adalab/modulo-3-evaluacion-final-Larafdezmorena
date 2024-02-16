import "../scss/App.scss";

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Personajes de Harry Potter</h1>
        <form className="filter">
          <label className="filter__label" htmlFor="character">
            Buscar por personaje
            <input className="text" type="text" name="" />
          </label>
          <label className="filter__label" htmlFor="house">
            Selecciona la casa
            <select className="filter__select">
              <option value="all">Todas</option>
              <option value="Gryffindor">Gryfindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw ">Ravenclaw </option>
              <option value="Hufflepuff">Hufflepuff</option>
            </select>
          </label>
        </form>
      </header>

      <ul className="characters__list">
        <li className="character__list">
          <img
            className="characters__image"
            src=""
            alt="Foto de Harry Potter"
          />
          <h2 className="characters__name">Harry</h2>
          <h3 className="character__race">Humano</h3>
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
    </div>
  );
}

export default App;
