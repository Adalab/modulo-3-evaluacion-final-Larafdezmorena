function Filters() {
  return (
    <form className="filter">
      <label className="filter__label" htmlFor="character">
        Buscar por personaje
        <input
          className="filter__input"
          type="text"
          name=""
          placeholder="Ej. Luna Lovegood"
        />
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
  );
}

export default Filters;
