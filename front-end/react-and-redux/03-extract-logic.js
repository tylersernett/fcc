//03: https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/extract-state-logic-to-redux
const ADD = 'ADD';

//action creator: You'll need to pass a message to this action creator and include the message in the returned action
const addMessage = (msg) => {
    return {
        type: ADD,
        message: msg
    }
};

//reducer: add a message to the array of messages held in state, or return the current state
const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            // non-mutative: spread operator, or arr.concat(item)
            return [...state, action.message]
        default:
            return state;
    }
};

//create your Redux store and pass it the reducer.
const store = Redux.createStore(messageReducer);