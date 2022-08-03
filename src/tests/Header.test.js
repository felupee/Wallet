import React from 'react';
import { screen } from '@testing-library/react';
import Header from '../components/Header';
import renderWithRouterAndRedux from './helpers/minhaAjuda';

describe('Verifica a tela de login', () => {
  test('verifica se login é exibida corretamente', () => {
    const initialState = {
      user: {
        email: 'felipesantosof@gmail.com'
      }
    }

    renderWithRouterAndRedux(<Header />, {
      initialState,
    });

  expect(screen.getByText(/felipesantosof@gmail.com/i)).toBeInTheDocument();
  expect(screen.getByText(/0.00/i)).toBeInTheDocument();
  expect(screen.getByText(/BRL/i)).toBeInTheDocument();
  });
});