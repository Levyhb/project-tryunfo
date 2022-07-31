import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cards.css';
import magic from '../imgs/magic.png';
import fire from '../imgs/fire.png';
import shield from '../imgs/shield.png';

export default class Card extends Component {
  render() {
    const { cardName,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardDescription } = this.props;
    return (
      <div className="card-container">
        <span data-testid="rare-card" className={ cardRare }>
          { cardRare }
        </span>
        <div className="card-box">
          <span data-testid="name-card" className="input-name" id="name">
            { cardName }
          </span>
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

          <div className="attr-names">
            <span>Magia</span>
            <span>Força</span>
            <span>Fogo</span>
          </div>

          <div className="attributes">

            <div className="div-attributes magic">
              <img
                src={ magic }
                alt="icone-magic"
                className="attr-icon-magic"
                width="80px"
              />
              <span data-testid="attr1-card">
                { cardAttr1 }
              </span>
            </div>

            <div className="div-attributes shield">
              <img src={ shield } alt="icone-shield" width="60px" />
              <span data-testid="attr2-card">
                { cardAttr2 }
              </span>

            </div>

            <div className="div-attributes fire">
              <img src={ fire } alt="icone-fire" width="65px" />
              <span data-testid="attr3-card">
                { cardAttr3 }
              </span>
            </div>

          </div>
          {
            cardTrunfo && <span
              data-testid="trunfo-card"
              className="trunfo"
            >
              Carta Especial
            </span>
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
};
