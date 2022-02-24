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
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome da carta:
          {' '}
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="summary">
          Descrição da carta:
          {' '}
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="name">
          Atributo 1:
          {' '}
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="name">
          Atributo 2:
          {' '}
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="name">
          Atributo 3:
          {' '}
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="name">
          imagem:
          {' '}
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="state">
          Raridade da carta:
          {' '}
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>

          </select>
        </label>

        <label htmlFor="name">
          Super Trunfo:
          {' '}
          {((hasTrunfo)
            ? 'Você já tem um Super Trunfo em seu baralho'
            : <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
            />)}
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

export default Form;
