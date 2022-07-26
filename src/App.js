import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      cardDescription, cardRare, cardTrunfo } = this.state;

    const card = {
      name: cardName,
      attribute1: cardAttr1,
      attribute2: cardAttr2,
      attribute3: cardAttr3,
      image: cardImage,
      description: cardDescription,
      rarity: cardRare,
      trunfo: cardTrunfo,
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

  render() {
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      cardDescription, isSaveButtonDisabled, hasTrunfo, deck } = this.state;
    // console.log(deck);
    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form
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
            cardName={ cardName }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            cardDescription={ cardDescription }
          />
          <div>
            Todas as cartas :
            { deck.map((everyCard) => (
              <Card
                key="a"
                cardName={ everyCard.name }
                cardAttr1={ everyCard.attribute1 }
                cardAttr2={ everyCard.attribute2 }
                cardAttr3={ everyCard.attribute3 }
                cardImage={ everyCard.image }
                cardRare={ everyCard.rarity }
                cardTrunfo={ everyCard.trunfo }
                cardDescription={ everyCard.description }
              />))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
