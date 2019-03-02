import { SET_OFFSET, SET_PAGE_COUNT } from './../actions/actionTypes';
const ITEMS_PER_PAGE = 12;

const defaultState = {
  offset: 0,
  pageCount: 0,
  currentPage: 0
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_OFFSET:
    console.log(payload.idx);
      return {
        ...state,
        currentPage: payload.idx,
        offset: Math.ceil(payload.idx * ITEMS_PER_PAGE)
      };
    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: Math.ceil(payload.totalItems / ITEMS_PER_PAGE)
      };
    default:
      return state;
  }
};
