import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { createStore } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import App from '../App';

describe('Verifica a tela de login', () => {
  test('testando a rota', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
})
  test('verifica se login é exibida corretamente', () => {
    const store = createStore(rootReducers);
  render(
    <Provider store={ store }>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/email/i)).toBeInTheDocument();
  expect(screen.getByText(/senha/i)).toBeInTheDocument();
  });
  test('verifica se existe um botão na tela', () => {
    const store = createStore(rootReducers);
  render(
    <Provider store={ store }>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  );
  const botao = screen.getByRole('button', { name: /Entrar/ });
  expect(botao).toBeInTheDocument();
  const campo = screen.queryAllByTestId('password-input');
  expect(campo.length).toBe(1);
});
  test('testa o botao desativado', () => {
    const store = createStore(rootReducers);
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    const botao = screen.getByRole('button');
    expect(botao.disabled).toBe(true);
    const campoemail = screen.getByTestId('email-input');
    const camposenha = screen.getByTestId('password-input');
    userEvent.type(campoemail, 'felipesantosof@gmail.com');
    userEvent.type(camposenha, 'abcdef');
    expect(botao.disabled).toBe(false);
  });
  test('tentando fazer login', () => {
    // Tive ajuda nesse teste do @Leonardo Campos, meu companheiro do projeto Front-end OnlineStore
    const { history } = renderWithRouterAndRedux(<App />);
    const validador = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
    const email = screen.getByTestId('email-input');
    userEvent.type(email, 'qualquercoisa.pradaerro');
    expect(validador.test(email.value)).toBeFalsy();

    userEvent.type(email, 'felipesantosof@gmail.com');
    expect(validador.test(email.value)).toBeTruthy();

    const senha = screen.getByTestId('password-input');
    const botao= screen.getByRole('button', { name: /entrar/i });
    expect(botao).toHaveProperty('disabled', true);

    userEvent.type(senha, 'abcdef');
    expect(botao).toHaveProperty('disabled', false);
    userEvent.click(botao);
    const { location: { pathname }} = history;
    expect(pathname).toBe('/carteira');
})
});