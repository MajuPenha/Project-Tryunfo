import PropTypes from 'prop-types';
import React from 'react';

class SearchSection extends React.Component {
  render() {
    const {
      filterName,
      filterRarity,
      filterTrunfo,
      onInputChange,
    } = this.props;
    return (
      <>
        <label htmlFor="filterName">
          <input
            type="text"
            data-testid="name-filter"
            placeholder="search by name"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
            disabled={ filterTrunfo }
          />
        </label>

        <label htmlFor="filterRarity">
          <select
            data-testid="rare-filter"
            name="filterRarity"
            value={ filterRarity }
            onChange={ onInputChange }
            disabled={ filterTrunfo }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>

          </select>
        </label>

        <label htmlFor="filterTrunfo">
          Super Trunfo:
          {' '}
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            checked={ filterTrunfo }
            name="filterTrunfo"
            onChange={ onInputChange }
          />
        </label>
      </>
    );
  }
}

SearchSection.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchSection;
