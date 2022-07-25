import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" data-testid="name-input" />
        <textarea
          name="descrição"
          cols="30"
          rows="10"
          data-testid="description-input"
        />

        <input type="number" name="atributeone" data-testid="attr1-input" />
        <input type="number" name="atributetwo" data-testid="attr2-input" />
        <input type="number" name="atributethree" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />

        <select name="raridade" id="" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input type="checkbox" name="super-trunfo" data-testid="trunfo-input" />

        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
