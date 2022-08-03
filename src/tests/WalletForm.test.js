import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import Wallet from '../pages/Wallet';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

describe('Verifica a WalletForm', () => {
  test('verifica se a walletform tá completo', () => {
    const store = createStore(rootReducers, applyMiddleware(thunk));
  render(
    <Provider store={ store }>
      <MemoryRouter>
        <Wallet/>
      </MemoryRouter>
    </Provider>
  );
  const campovalue = screen.getByTestId('value-input');
  expect(campovalue).toBeInTheDocument();
  });
});