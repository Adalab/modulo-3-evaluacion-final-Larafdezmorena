import PropTypes from "prop-types";

import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";

function Filters({ handleFilter }) {
  return (
    <form className="filter">
      <FilterCharacter handleFilter={handleFilter} />
      <FilterHouse handleFilter={handleFilter} />
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
