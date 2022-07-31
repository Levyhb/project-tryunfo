import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './forms.css';

class Form extends Component {
  render() {
    const { onInputChange, cardName,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardDescription, isSaveButtonDisabled,
      onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <form className="form">
        <label htmlFor="name" className="name-input text-colors">
          Nome
          <input
            id="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
            className="name-forms input-group-text"
          />
        </label>

        <label htmlFor="descricao" className="description-form text-colors">
          Descrição
          <textarea
            id="descricao"
            className="description-form form-control"
            name="cardDescription"
            cols="50"
            rows="3"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1" className="attribute-form text-colors">
          Magia
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            className="attr-input"
          />
        </label>
        <label htmlFor="attr2" className="attribute-form text-colors">
          Força
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            className="attr-input"
          />
        </label>
        <label htmlFor="attr3" className="attribute-form text-colors">
          Fogo
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            className="attr-input"
          />
        </label>

        <label htmlFor="img-input" className="img-form text-colors">
          Imagem
          <input
            id="img-input"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
            className="input-group-text img-input"
          />
        </label>

        <label htmlFor="select-box" className="rarity-form text-colors">
          Rarity
          <select
            className="form-select"
            id="select-box"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : (
          <label htmlFor="superTrunfo" className="superTrunfo text-colors">
            Carta Especial
            <input
              id="superTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="cardTrunfo"
              className="form-check-input"
            />
          </label>
        )}

        <div>
          <button
            data-testid="save-button"
            type="submit"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            className="save-btn btn"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
