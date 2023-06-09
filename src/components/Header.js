import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    // criar um reduce com expenses e o valor inicial 0
    const valor = expenses.reduce((acc, {
      value,
      currency,
      exchangeRates,
    }) => acc + (Number(exchangeRates[currency].ask) * value), 0);
    const valor2 = valor.toFixed(2);
    // acumulador + valorAtual * ValordaCotacao
    return (
      <div className="header">
        <h1 data-testid="email-field">{email}</h1>
        <h2 data-testid="total-field">{valor2}</h2>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Header);
