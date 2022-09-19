import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends React.Component {
  render() {
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

    return (
      <div className="card-preview">
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <button
          type="button"
          data-testid="delete-button"
          onClick={ deleteButton }
        >
          Excluir
        </button>
      </div>

    );
  }
}

SavedCards.propTypes = {
  deleteButton: PropTypes.func.isRequired,
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};
SavedCards.defaultProps = {
  cardName: '',
  cardDescription: '0',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

export default SavedCards;
