import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apagaDespesa } from '../redux/actions';

class Table extends Component {
  apagaD = (value) => {
    const { apaga } = this.props;
    apaga(value);
  }

  render() {
    const { expenses } = this.props;
    // console.log('expenses', expenses);
    return (
      <div>
        <table border="10">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {
            expenses.map((despesa) => (
              <tbody key={ despesa.id }>
                <tr>
                  <td>{despesa.description}</td>
                  <td>{despesa.tag}</td>
                  <td>{despesa.method}</td>
                  <td>{Number(despesa.value).toFixed(2)}</td>
                  <td>{despesa.exchangeRates[despesa.currency].name}</td>
                  <td>
                    {
                      Number(despesa.exchangeRates[despesa.currency].ask).toFixed(2)
                    }
                  </td>
                  <td>
                    {
                      Number(
                        despesa.value * despesa.exchangeRates[despesa.currency].ask,
                      ).toFixed(2)
                    }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      name="excluir"
                      type="button"
                      onClick={ () => this.apagaD(despesa) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  apaga: (value) => dispatch(apagaDespesa(value)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  apaga: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
