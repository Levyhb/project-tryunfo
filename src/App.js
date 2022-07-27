import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
      hasTrunfo: false,
      cardDescription: '',
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  buttonDisabled = (() => {
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardDescription } = this.state;

    const number90 = 90;
    const maxStatus = 210;
    const cardAttr1Int = parseInt(cardAttr1, 10);
    const cardAttr2Int = parseInt(cardAttr2, 10);
    const cardAttr3Int = parseInt(cardAttr3, 10);

    const statusIndividual = cardAttr1Int
      <= number90 && cardAttr2Int <= number90 && cardAttr3Int <= number90;
    const positive = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;
    const status = cardAttr1Int + cardAttr2Int + cardAttr3Int <= maxStatus;

    const verifyStatus = status && statusIndividual && positive;

    if (cardName.length > 0
        && cardDescription.length > 0 && cardImage.length > 0 && verifyStatus) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    this.setState({ isSaveButtonDisabled: true });
  })

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.buttonDisabled);
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardDescription, cardRare, cardTrunfo, removeButton } = this.state;

    const card = {
      name: cardName,
      attribute1: cardAttr1,
      attribute2: cardAttr2,
      attribute3: cardAttr3,
      image: cardImage,
      description: cardDescription,
      rarity: cardRare,
      trunfo: cardTrunfo,
      button: removeButton,
    };

    this.setState((prevState) => ({ cardName: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardDescription: '',
      cardRare: 'normal',
      deck: [...prevState.deck, card],
      cardTrunfo: false,
    }), () => {
      const { deck } = this.state;
      const trueOrFalse = deck.some((item) => item.trunfo);
      this.setState({ hasTrunfo: trueOrFalse });
    });
  }

  removeCard = (nameItem) => {
    const { deck } = this.state;
    const filterTrunfo = deck.filter((item) => item.name !== nameItem);
    this.setState({
      deck: filterTrunfo,
    });
    const haveTrunfo = filterTrunfo.find((card) => card.cardTrunfo === true);
    if (!haveTrunfo) {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      cardDescription, isSaveButtonDisabled, hasTrunfo, deck } = this.state;

    return (
      <div>
        <h1 className="title">Tryunfo</h1>

        <div className="card-generator">
          <Form
            className="form-div"
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            cardDescription={ cardDescription }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            className="card-div"
            cardName={ cardName }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            cardDescription={ cardDescription }
          />
        </div>

        <h3 className="deck-title"> Baralho: </h3>

        <label htmlFor="search-card" className="search-card">
          Buscar carta
          <input
            type="text"
            placeholder="nome da carta"
            id="search-card"
            onChange={ ({ target }) => deck.filter(
              (element) => element.includes(target.value),
            ) }
          />
        </label>

        <div className="deck-container">
          { deck.map((everyCard) => (
            <div key={ everyCard.name } className="card-deck">
              <Card
                cardName={ everyCard.name }
                cardAttr1={ everyCard.attribute1 }
                cardAttr2={ everyCard.attribute2 }
                cardAttr3={ everyCard.attribute3 }
                cardImage={ everyCard.image }
                cardRare={ everyCard.rarity }
                cardTrunfo={ everyCard.trunfo }
                cardDescription={ everyCard.description }
                removeCard={ this.removeCard }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.removeCard(everyCard.name) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
