import PropTypes from 'prop-types';
import React from 'react';
import SavedCards from './SavedCards';

class Filter extends React.Component {
  render() {
    const {
      data,
      filterName,
      filterRarity,
      deleteButton,
    } = this.props;

    return (
      filterRarity !== 'todas'
        ? data.savedCards.filter((item) => item.cardName.includes(filterName))
          .filter((item) => item.cardRare === filterRarity)
          .map((item, index) => (
            <SavedCards
              key={ index }
              index={ index }
              deleteButton={ deleteButton }
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardImage={ item.cardImage }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
            />
          ))
        : data.savedCards.filter((item) => item.cardName.includes(filterName))
          .map((items, index) => (
            <SavedCards
              key={ index }
              index={ index }
              deleteButton={ deleteButton }
              cardName={ items.cardName }
              cardDescription={ items.cardDescription }
              cardAttr1={ items.cardAttr1 }
              cardAttr2={ items.cardAttr2 }
              cardAttr3={ items.cardAttr3 }
              cardImage={ items.cardImage }
              cardRare={ items.cardRare }
              cardTrunfo={ items.cardTrunfo }
            />
          ))

    );
  }
}

Filter.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  savedCards: PropTypes.arrayOf(PropTypes.node),
  filterName: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  deleteButton: PropTypes.func.isRequired,

};
Filter.defaultProps = {
  savedCards: [''],
};

export default Filter;
