import PropTypes from "prop-types";

import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";

function Filters({ handleFilter }) {
  return (
    <form className="filter">
      <h1 className="header__title">🔎 Busca tus magos favoritos</h1>
      <FilterCharacter handleFilter={handleFilter} />
      <FilterHouse handleFilter={handleFilter} />
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
