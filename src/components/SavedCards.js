import React from 'react';
import PropTypes from 'prop-types';

class SavedCards extends React.Component {
  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      deleteButton,
    } = this.props;

    return (
      <div className="card-preview">
        <div data-testid="name-card">{ name }</div>
        <img src={ image } alt={ name } data-testid="image-card" />
        <p data-testid="description-card">{ description }</p>
        <p data-testid="attr1-card">{ attr1 }</p>
        <p data-testid="attr2-card">{ attr2 }</p>
        <p data-testid="attr3-card">{ attr3 }</p>
        <p data-testid="rare-card">{ rare }</p>
        {trunfo && <p data-testid="trunfo-card">Super Trunfo</p>}

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
  name: PropTypes.string,
  description: PropTypes.string,
  attr1: PropTypes.string,
  attr2: PropTypes.string,
  attr3: PropTypes.string,
  image: PropTypes.string,
  rare: PropTypes.string,
  trunfo: PropTypes.bool,
};

SavedCards.defaultProps = {
  name: '',
  description: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  image: '',
  rare: 'normal',
  trunfo: false,
};

export default SavedCards;
