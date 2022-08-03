import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import Wallet from '../pages/Wallet';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

describe('Verifica a Wallet', () => {
  test('verifica se a wallet tem alguma coisa', () => {
    const store = createStore(rootReducers, applyMiddleware(thunk));
  render(
    <Provider store={ store }>
      <MemoryRouter>
        <Wallet/>
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/despesas/i)).toBeInTheDocument();
});
});