import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
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
                  <td>Excluir</td>
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

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Table);
