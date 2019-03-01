import { SEARCH_TERM } from './../actions/actionTypes';

export default (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TERM:
      return payload.term;
    default:
      return state;
  }
};
