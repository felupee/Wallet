import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { salvaLogin } from '../redux/actions';
import './Login.css';
import logo from './wallet.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botaoLogin: true,
      email: '',
      senha: '',
      redirect: false,
    };
  }

  habilitaBotao = () => {
    const { email, senha } = this.state;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const seis = 6;
    if (email.match(regex) && senha.length >= seis) {
      this.setState({
        botaoLogin: false,
      });
    } else {
      this.setState({
        botaoLogin: true,
      });
    }
  }

  handleImput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => { this.habilitaBotao(); });
  };

  enviar = () => {
    const { enviaLogin } = this.props;
    const { email } = this.state;
    enviaLogin(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, senha, botaoLogin, redirect } = this.state;
    return (
      <div className="main1">
        <div className="main2">
          { redirect && <Redirect to="/carteira" />}
          <img src={ logo } alt="logo" width="300" />
          Email:
          <input
            data-testid="email-input"
            type="text"
            name="email"
            onChange={ this.handleImput }
            value={ email }
          />
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            onChange={ this.handleImput }
            value={ senha }
          />
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ botaoLogin }
            onClick={ this.enviar }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  enviaLogin: (payload) => dispatch(salvaLogin(payload)),
});

Login.propTypes = {
  enviaLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
