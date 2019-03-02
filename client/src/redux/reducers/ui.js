import { TOGGLE_LOADING, TOGGLE_MODAL } from './../actions/actionTypes';

const defaultState = {
  loading: false,
  modalIsOpen: false
};

export default (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    case TOGGLE_MODAL:
      return { ...state, modalIsOpen: !state.modalIsOpen };
    default:
      return state;
  }
};
