import { SET_OFFSET, SET_PAGE_COUNT } from './../actions/actionTypes';

const defaultState = {
  offset: 0,
  pageCount: 0
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_OFFSET:
      return { ...state, offset: Math.ceil(payload.offset) };
    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: Math.ceil(payload.pageCount)
      };
    default:
      return state;
  }
};
