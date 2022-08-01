import { DADOS_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case DADOS_LOGIN:
    return {
      ...state, email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
