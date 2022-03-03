import PropTypes from 'prop-types';
import React from 'react';
import SavedCards from './SavedCards';

class FilterName extends React.Component {
  render() {
    const { /* filterName, */ savedCards } = this.props;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteButton,
    } = this.props;
    console.log(savedCards);
    return (
    /*  { */
    /*  savedCards.filter((item) => item.cardName.includes(filterName))
          .map((item, index) => ( */
      <SavedCards
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
      />
    /*   )) */
    /*  } */

    );
  }
}

FilterName.propTypes = {
  savedCards: PropTypes.array,
/*   filterName: PropTypes.string, */
};
/* FilterName.defaultProps = {
  cardName: '',
  cardDescription: '0',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
}; */

export default FilterName;
