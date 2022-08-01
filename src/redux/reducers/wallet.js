import { GET_MOEDA, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case GET_MOEDA:
    return {
      currencies: action.moeda.filter((item) => item !== 'USDT'),
    };
  default:
    return state;
  }
}

export default wallet;
