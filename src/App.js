import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
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
      savedCards,
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
    const isItTrue = savedCards.some((item) => item.trunfo === true);
    this.setState(() => ({
      hasTrunfo: isItTrue,
    }));
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
      /* savedCards, */
    } = this.state;
    const obj = {
      name: cardName,
      descriptin: cardDescription,
      image: cardImage,
      rare: cardRare,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      trunfo: cardTrunfo,
    };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, obj],
    }));
    /* console.log(savedCards.some((item) => item.trunfo === true));
    const isItTrue = savedCards.some((item) => item.trunfo === true);
    this.setState(() => ({
      hasTrunfo: isItTrue,
    })); */
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
    }));
  }

  deleteButton = (index) => {
    const { savedCards } = this.state;
    const arr = [...savedCards];
    arr.splice(index, 1);
    this.setState({
      savedCards: arr,
    });
    const isItTrue = savedCards.some((item) => item.trunfo === true);
    this.setState(() => ({
      hasTrunfo: isItTrue,
    }));
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
    return (
      <>
        <div>
          <h1>Tryunfo(ai Jesus!)</h1>
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
        <div>
          {savedCards.map((item, index) => (<SavedCards
            key={ index }
            index={ index }
            deleteButton={ this.deleteButton }
            name={ item.name }
            description={ item.description }
            attr1={ item.attr1 }
            attr2={ item.attr2 }
            attr3={ item.attr }
            image={ item.image }
            rare={ item.rare }
            trunfo={ item.trunfo }
          />))}
        </div>
      </>
    );
  }
}

export default App;
