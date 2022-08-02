import { GET_COTACAO, GET_MOEDA, SALVA_STORE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  cotacao: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_MOEDA:
    return {
      ...state, currencies: action.moeda.filter((item) => item !== 'USDT'),
    };
  case GET_COTACAO:
    return {
      ...state, cotacao: action.data,
    };
  case SALVA_STORE:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
