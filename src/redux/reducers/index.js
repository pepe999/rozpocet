import { ADD_PERSON } from "../constants/action-types";

const initialState = {
persons: [/*{id: 1, name: "John", amount: 2000}*/],
  //persons: [],
  sumAmount: 0 
};

function rootReducer(state = initialState, action) {
//   if (action.type === ADD_PERSON) {
//     state.persons.push(action.payload);
//   }

    // kvůli immutable změněno na:
  if (action.type === ADD_PERSON) {

    const newPerson = {id: state.persons.length, name: action.payload.name, amount: action.payload.amount} ;

    return Object.assign({}, state, {
      persons: state.persons.concat(newPerson),
      sumAmount: state.sumAmount + parseFloat(newPerson.amount)
    });

  }

  return state;
}

export default rootReducer;