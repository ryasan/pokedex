import { ADD_CATEGORY, REMOVE_CATEGORY } from '../actions/actionTypes';

const defaultState = [
  { title: 'Grass', selected: false },
  { title: 'Poison', selected: false },
  { title: 'Fire', selected: false },
  { title: 'Flying', selected: false },
  { title: 'Water', selected: false },
  { title: 'Bug', selected: false },
  { title: 'Normal', selected: false },
  { title: 'Electric', selected: false },
  { title: 'Ground', selected: false },
  { title: 'Fighting', selected: false },
  { title: 'Psychic', selected: false },
  { title: 'Rock', selected: false },
  { title: 'Ice', selected: false },
  { title: 'Ghost', selected: false },
  { title: 'Dragon', selected: false }
];

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CATEGORY:
      return state.map((category, idx) => ({
        ...category,
        selected: category.selected || idx === payload.idx
      }));
    case REMOVE_CATEGORY:
      return state.map((category, idx) => ({
        ...category,
        selected: idx === payload.idx ? false : category.selected
      }));
    default:
      return state;
  }
};
