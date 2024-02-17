function FilterHouse({ handleFilter }) {
  const handleInputHouse = (event) => {
    handleFilter("house", event.currentTarget.value);
  };
  return (
    <label className="filter__label" htmlFor="character">
      Selecciona la casa
      <select className="filter__select" onInput={handleInputHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw </option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </label>
  );
}

export default FilterHouse;
