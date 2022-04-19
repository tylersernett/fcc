//11: https://www.freecodecamp.org/learn/front-end-development-libraries/redux/send-action-data-to-the-store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    //when type is ADD_NOTE, return the text as the new state
    case ADD_NOTE:
      return action.text
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // return an object w/ action type, and the note's contents stored in the text property
  return {type: ADD_NOTE, text: note}
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());