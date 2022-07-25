import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardDescription } = this.props;
    return (
      <div>
        <span data-testid="name-card">
          { cardName }
        </span>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <div className="attributes">
          <span data-testid="attr1-card">
            { cardAttr1 }
          </span>
          <span data-testid="attr2-card">
            { cardAttr2 }
          </span>
          <span data-testid="attr3-card">
            { cardAttr3 }
          </span>
        </div>
        <span data-testid="rare-card">
          { cardRare }
        </span>
        {
          cardTrunfo === true && <span data-testid="trunfo-card">Super Trunfo</span>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
};
