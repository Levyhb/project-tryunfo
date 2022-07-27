import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cards.css';

export default class Card extends Component {
  render() {
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardDescription } = this.props;
    return (
      <div className="card-container">

        <label htmlFor="name" className="name-card">
          Nome:
          <span data-testid="name-card" className="input-name" id="name">
            { cardName }
          </span>
        </label>

        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          width="200px"
          className="img-card"
        />

        <label htmlFor="description" className="description-card">
          Descrição:
          <p id="description" data-testid="description-card">
            { cardDescription }
          </p>
        </label>

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
          cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>
        }
        {/* {
          shouldRenderDeleteButton
            ? <button key={ cardName } type="button"> Excluir </button> : undefined
        } */}

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
