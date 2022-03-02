import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import SavedCards from './components/SavedCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
      savedCards: [],
    };
  }

  validation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const min = 0;
    const maxAttr = 90;
    const total = 210;
    const sumAttr = parseInt(cardAttr1, 10)
     + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);

    const notEmpty = [cardName, cardDescription, cardImage, cardRare]
      .some((item) => item === '');
    const numbers = [cardAttr1, cardAttr2, cardAttr3]
      .some((item) => item < 0 || item > maxAttr);
    if (notEmpty || numbers || sumAttr > total || sumAttr < min) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  onInputChange = ({ target }) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [target.name]: value }, this.validation);
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      savedCards,
    } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState({
      savedCards: [...savedCards, obj],
    }, this.trunfoValidation);

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      filterName: '',
    }));
  }

  trunfoValidation = () => {
    const { savedCards } = this.state;
    const isItTrue = savedCards.some((item) => item.cardTrunfo === true);
    this.setState(() => ({
      hasTrunfo: isItTrue,
    }));
  };

  deleteButton = (index) => {
    const { savedCards } = this.state;
    const arr = [...savedCards];
    arr.splice(index, 1);
    this.setState({
      savedCards: arr,
    }, this.trunfoValidation);
  }

  searchBar = ({ target }) => {
    const { filterName } = this.state;
    this.setState({
      filterName: target.value,
    });
    console.log(filterName);
    /*     const { savedCards } = this.state;
    savedCards.filter((item) => item.cardName.includes(target.value)) */
  }

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
    } = this.state;
    const { savedCards } = this.state;
    const { filterName } = this.state;
    return (
      <>
        <h1>Tryunfo(ai Jesus!)</h1>
        <div className="main-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
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
        </div>
        <div className="myCards">
          <label htmlFor="search">
            <input
              type="text"
              data-testid="name-filter"
              placeholder="search by name"
              name="search"
              onChange={ this.searchBar }
            />
          </label>
          <div className="savedCards">
            {savedCards.filter((item) => item.cardName.includes(filterName))
              .map((item, index) => (
                <SavedCards
                  key={ index }
                  index={ index }
                  deleteButton={ this.deleteButton }
                  cardName={ item.cardName }
                  cardDescription={ item.cardDescription }
                  cardAttr1={ item.cardAttr1 }
                  cardAttr2={ item.cardAttr2 }
                  cardAttr3={ item.cardAttr3 }
                  cardImage={ item.cardImage }
                  cardRare={ item.cardRare }
                  cardTrunfo={ item.cardTrunfo }
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
