import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './forms.css';

class Form extends Component {
  render() {
    const { onInputChange, cardName,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardDescription, isSaveButtonDisabled,
      onSaveButtonClick } = this.props;
    return (
      <form className="form">
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea
            id="descricao"
            name="descrição"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Attr1
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Attr2
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Attr3
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <input
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <select
          name="raridade"
          id=""
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          type="checkbox"
          name="super-trunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          data-testid="save-button"
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
