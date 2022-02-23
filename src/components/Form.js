import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome da carta:
          {' '}
          <input
            data-testid="name-input"
            type="text"
            name="name-input"
            value={ cardName }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="summary">
          Descrição da carta:
          {' '}
          <textarea
            data-testid="description-input"
            name="description-input"
            value={ cardDescription }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="name">
          Atributo 1:
          {' '}
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1-input"
            value={ cardAttr1 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="name">
          Atributo 2:
          {' '}
          <input
            data-testid="attr2-input"
            type="number"
            name="cardName"
            value={ cardAttr2 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="name">
          Atributo 3:
          {' '}
          <input
            data-testid="attr3-input"
            type="number"
            name="cardName"
            value={ cardAttr3 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="name">
          imagem:
          {' '}
          <input
            data-testid="image-input"
            type="text"
            name="cardName"
            value={ cardImage }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="state">
          Raridade da carta:
          {' '}
          <select
            data-testid="rare-input"
            name="state"
            value={ cardRare }
            onChange={ this.onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muitoRaro">muito raro</option>

          </select>
        </label>

        <label htmlFor="name">
          Super Trunfo:
          {' '}
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardName"
            checked={ cardTrunfo }
            onChange={ this.onInputChange }
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ this.onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
