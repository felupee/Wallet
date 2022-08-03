import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { createStore } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('Verifica a tela de login', () => {
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
});