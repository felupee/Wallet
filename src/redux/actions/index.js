export const DADOS_LOGIN = 'SALVA-LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_MOEDA = 'GET_MOEDA';

export const salvaLogin = (payload) => ({
  type: DADOS_LOGIN,
  payload,
});

export const requestAPI = () => ({ type: REQUEST_API });

export const getMoeda = (data) => ({
  type: GET_MOEDA,
  moeda: Object.keys(data),
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
