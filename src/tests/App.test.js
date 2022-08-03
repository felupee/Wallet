import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import App from '../App';
describe('Cadastro de clientes', () => {
    test('verifica se a tela inicial é renderizada corretamente', () => {
      const store = createStore(rootReducers, applyMiddleware(thunk));
      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );
  
      expect(screen.getByText(/email/i)).toBeInTheDocument();
      expect(screen.getByText(/senha/i)).toBeInTheDocument();
    });
});