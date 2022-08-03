import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Table from '../components/Table';
import renderWithRouterAndRedux from './helpers/minhaAjuda';

describe('Verifica a Table', () => {
  test('verifica se a Table tem alguma coisa', () => {
    const store = createStore(rootReducers, applyMiddleware(thunk));
  render(
    <Provider store={ store }>
      <MemoryRouter>
        <Table/>
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/Moeda de conversão/i)).toBeInTheDocument();
  expect(screen.getByText(/Descrição/i)).toBeInTheDocument();
  expect(screen.getByText(/Método de pagamento/i)).toBeInTheDocument();
  
});
  test('verifica se a Table tem mais alguma coisa', () => {
    const initialState = {
      wallet: {
        expenses: [
          {
            id: 0,
            value: '100',
            description: 'Riot Points',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'Alimentação',
            exchangeRates: {
              USD: {
                code: 'USD',
                codein: 'BRL',
                name: 'Dólar Americano/Real Brasileiro',
                high: '5.3137',
                low: '5.2461',
                varBid: '0.0102',
                pctChange: '0.19',
                bid: '5.2883',
                ask: '5.289',
                timestamp: '1659558964',
                create_date: '2022-08-03 17:36:04'
              },
              USDT: {
                code: 'USD',
                codein: 'BRLT',
                name: 'Dólar Americano/Real Brasileiro Turismo',
                high: '5.33',
                low: '5.255',
                varBid: '0.01',
                pctChange: '0.19',
                bid: '5.15',
                ask: '5.46',
                timestamp: '1659554340',
                create_date: '2022-08-03 16:19:00'
              },
              CAD: {
                code: 'CAD',
                codein: 'BRL',
                name: 'Dólar Canadense/Real Brasileiro',
                high: '4.1303',
                low: '4.0857',
                varBid: '0.0208',
                pctChange: '0.51',
                bid: '4.118',
                ask: '4.1192',
                timestamp: '1659558964',
                create_date: '2022-08-03 17:36:04'
              },
              GBP: {
                code: 'GBP',
                codein: 'BRL',
                name: 'Libra Esterlina/Real Brasileiro',
                high: '6.445',
                low: '6.386',
                varBid: '-0.001',
                pctChange: '-0.02',
                bid: '6.4221',
                ask: '6.4235',
                timestamp: '1659558964',
                create_date: '2022-08-03 17:36:04'
              },
              ARS: {
                code: 'ARS',
                codein: 'BRL',
                name: 'Peso Argentino/Real Brasileiro',
                high: '0.0401',
                low: '0.0397',
                varBid: '0',
                pctChange: '0',
                bid: '0.0399',
                ask: '0.0399',
                timestamp: '1659558964',
                create_date: '2022-08-03 17:36:04'
              },
              BTC: {
                code: 'BTC',
                codein: 'BRL',
                name: 'Bitcoin/Real Brasileiro',
                high: '124.594',
                low: '120.04',
                varBid: '1379',
                pctChange: '1.13',
                bid: '123.258',
                ask: '123.385',
                timestamp: '1659558964',
                create_date: '2022-08-03 17:36:04'
              },
              LTC: {
                code: 'LTC',
                codein: 'BRL',
                name: 'Litecoin/Real Brasileiro',
                high: '317',
                low: '300.32',
                varBid: '6.3',
                pctChange: '2.03',
                bid: '313.78',
                ask: '314.99',
                timestamp: '1659558947',
                create_date: '2022-08-03 17:35:47'
              },
              EUR: {
                code: 'EUR',
                codein: 'BRL',
                name: 'Euro/Real Brasileiro',
                high: '5.3881',
                low: '5.3377',
                varBid: '0.0113',
                pctChange: '0.21',
                bid: '5.3756',
                ask: '5.3789',
                timestamp: '1659558966',
                create_date: '2022-08-03 17:36:06'
              },
              JPY: {
                code: 'JPY',
                codein: 'BRL',
                name: 'Iene Japonês/Real Brasileiro',
                high: '0.03989',
                low: '0.03921',
                varBid: '-0.0002',
                pctChange: '-0.5',
                bid: '0.03949',
                ask: '0.03951',
                timestamp: '1659558968',
                create_date: '2022-08-03 17:36:08'
              },
              CHF: {
                code: 'CHF',
                codein: 'BRL',
                name: 'Franco Suíço/Real Brasileiro',
                high: '5.5322',
                low: '5.4631',
                varBid: '-0.0043',
                pctChange: '-0.08',
                bid: '5.5052',
                ask: '5.5082',
                timestamp: '1659558964',
                create_date: '2022-08-03 17:36:04'
              },
              AUD: {
                code: 'AUD',
                codein: 'BRL',
                name: 'Dólar Australiano/Real Brasileiro',
                high: '3.6765',
                low: '3.6356',
                varBid: '0.0235',
                pctChange: '0.64',
                bid: '3.6738',
                ask: '3.6764',
                timestamp: '1659558964',
                create_date: '2022-08-03 17:36:04'
              },
              CNY: {
                code: 'CNY',
                codein: 'BRL',
                name: 'Yuan Chinês/Real Brasileiro',
                high: '0.786',
                low: '0.7774',
                varBid: '0.0002',
                pctChange: '0.03',
                bid: '0.7824',
                ask: '0.7827',
                timestamp: '1659558962',
                create_date: '2022-08-03 17:36:02'
              },
              ILS: {
                code: 'ILS',
                codein: 'BRL',
                name: 'Novo Shekel Israelense/Real Brasileiro',
                high: '1.5778',
                low: '1.5576',
                varBid: '0.0069',
                pctChange: '0.44',
                bid: '1.5732',
                ask: '1.5739',
                timestamp: '1659558962',
                create_date: '2022-08-03 17:36:02'
              },
              ETH: {
                code: 'ETH',
                codein: 'BRL',
                name: 'Ethereum/Real Brasileiro',
                high: '8.8784',
                low: '8.44452',
                varBid: '-77.61',
                pctChange: '-0.89',
                bid: '8.65951',
                ask: '8.67',
                timestamp: '1659558962',
                create_date: '2022-08-03 17:36:02'
              },
              XRP: {
                code: 'XRP',
                codein: 'BRL',
                name: 'XRP/Real Brasileiro',
                high: '1.99',
                low: '1.92',
                varBid: '0.01',
                pctChange: '0.43',
                bid: '1.98',
                ask: '1.99',
                timestamp: '1659558937',
                create_date: '2022-08-03 17:35:37'
              },
              DOGE: {
                code: 'DOGE',
                codein: 'BRL',
                name: 'Dogecoin/Real Brasileiro',
                high: '0.361351',
                low: '0.345437',
                varBid: '0.00377099',
                pctChange: '1.06',
                bid: '0.358737',
                ask: '0.358737',
                timestamp: '1659558936',
                create_date: '2022-08-03 17:35:36'
              }
            }
          }
        ]
      }
    }

    renderWithRouterAndRedux(<Table />, {
      initialState,
    });
    expect(screen.getByText(/Riot Points/i)).toBeInTheDocument();
    expect(screen.getByText(/Alimentação/i)).toBeInTheDocument();
    expect(screen.getByText(/Dinheiro/i)).toBeInTheDocument();
    expect(screen.getByText(/5.29/i)).toBeInTheDocument();
    expect(screen.getByText(/528.90/i)).toBeInTheDocument();
  });
});