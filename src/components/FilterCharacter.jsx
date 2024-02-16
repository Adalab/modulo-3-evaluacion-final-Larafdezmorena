function FilterCharacter({ handleFilter }) {
  const handleInputCharacter = (event) => {
    handleFilter("character", event.currentTarget.value);
  };
  return (
    <label className="filter__label" htmlFor="character">
      Buscar por personaje
      <input
        className="filter__input"
        type="text"
        name="character"
        placeholder="Ej. Luna Lovegood"
        onInput={handleInputCharacter}
      />
    </label>
  );
}

export default FilterCharacter;
