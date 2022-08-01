import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { disparaAPI } = this.props;
    disparaAPI();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    const metodos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const despesas = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        Despesas:
        <input
          data-testid="value-input"
          label="Despesas"
          name="despesas"
          type="number"
          value=""
          onChange={ () => {} }
        />
        Descrição:
        <input
          data-testid="description-input"
          label="Descrição"
          name="descrição"
          type="text"
          value=""
          onChange={ () => {} }
        />
        Moeda:
        <select
          data-testid="currency-input"
          name="moeda"
          required
          onChange={ () => {} }
          defaultValue=""
        >
          {
            currencies.map((value, key) => (
              <option key={ key }>{ value }</option>
            ))
          }
        </select>
        Método de pagamento:
        <select
          data-testid="method-input"
          name="metodo"
          required
          onChange={ () => {} }
          defaultValue=""
        >
          {
            metodos.map((value, key) => (
              <option key={ key }>{ value }</option>
            ))
          }
        </select>
        <select
          data-testid="tag-input"
          name="metodo"
          required
          onChange={ () => {} }
          defaultValue=""
        >
          {
            despesas.map((value, key) => (
              <option key={ key }>{ value }</option>
            ))
          }
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  disparaAPI: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  disparaAPI: PropTypes.func.isRequired,
  currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
