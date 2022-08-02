export const DADOS_LOGIN = 'SALVA-LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_MOEDA = 'GET_MOEDA';
export const GET_COTACAO = 'GET_COTACAO';
export const SALVA_STORE = 'SALVA_STORE';

export const salvaLogin = (payload) => ({
  type: DADOS_LOGIN,
  payload,
});

export const requestAPI = () => ({ type: REQUEST_API });

export const getMoeda = (data) => ({
  type: GET_MOEDA,
  moeda: Object.keys(data),
});

export const getCotacao = (data) => ({
  type: GET_COTACAO,
  data,
});

export const salvaNaStore = (payload) => ({
  type: SALVA_STORE,
  payload,
});

export function fetchAPI() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await response.json();
      return dispatch(getMoeda(json));
    } catch (error) {
      return error;
    }
  };
}

export function fetchAPIcotacao() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await response.json();
      return dispatch(getCotacao(json));
    } catch (error) {
      return error;
    }
  };
}
