import { ADD_PERSON } from "../constants/action-types";

const initialState = {
  //persons: [{id, name, amount}],
  persons: [],
  sumAmount: 0 
};

function rootReducer(state = initialState, action) {
//   if (action.type === ADD_PERSON) {
//     state.persons.push(action.payload);
//   }
    // kvůli immutable změněno na:
  if (action.type === ADD_PERSON) {
    return Object.assign({}, state, {
      persons: state.persons.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;