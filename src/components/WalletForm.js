import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, fetchAPIcotacao, salvaNaStore } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
  }

  componentDidMount() {
    const { disparaAPI } = this.props;
    disparaAPI();
  }

  handleImput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  salvaForm = async () => {
    const { disparaAPIcotacao, salva } = this.props;
    await disparaAPIcotacao();
    const { cotacao } = this.props;
    this.setState({
      exchangeRates: cotacao,
    });
    // console.log('cotação', cotacao);
    /*     const array = Object.values(cotacao);
    array.forEach((element) => {
      const objeto = {
        code: element.code,
        name: element.name,
        ask: element.ask,
      };
      this.setState((prevState) => ({
        exchangeRates: [...prevState.exchangeRates, objeto],
      }));
    }); */
    await salva(this.state);
    const { id } = this.state;
    this.setState({
      id: (id + 1),
      value: '',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const metodos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const despesas = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        Despesas:
        <input
          data-testid="value-input"
          label="Despesas"
          name="value"
          type="number"
          value={ value }
          onChange={ this.handleImput }
        />
        Descrição:
        <input
          data-testid="description-input"
          label="Descrição"
          name="description"
          type="text"
          value={ description }
          onChange={ this.handleImput }
        />
        Moeda:
        <select
          data-testid="currency-input"
          name="currency"
          value={ currency }
          onChange={ this.handleImput }
        >
          {
            currencies.map((valor, key) => (
              <option key={ key }>{ valor }</option>
            ))
          }
        </select>
        Método de pagamento:
        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.handleImput }
        >
          {
            metodos.map((valor, key) => (
              <option key={ key }>{ valor }</option>
            ))
          }
        </select>
        Despesas:
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.handleImput }
        >
          {
            despesas.map((valor, key) => (
              <option key={ key }>{ valor }</option>
            ))
          }
        </select>
        <button
          type="button"
          name="enviar"
          onClick={ this.salvaForm }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  disparaAPI: () => dispatch(fetchAPI()),
  disparaAPIcotacao: () => dispatch(fetchAPIcotacao()),
  salva: (payload) => dispatch(salvaNaStore(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  cotacao: state.wallet.cotacao,
});

WalletForm.propTypes = {
  disparaAPI: PropTypes.func.isRequired,
  salva: PropTypes.func.isRequired,
  disparaAPIcotacao: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  cotacao: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
