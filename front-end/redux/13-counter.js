// 13: https://www.freecodecamp.org/learn/front-end-development-libraries/redux/write-a-counter-with-redux

//define constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//define reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

//define actions
const incAction = () => {
    return {
        type: INCREMENT
    }
};
const decAction = () => {
    return {
        type: DECREMENT
    }
};

//define store
const store = Redux.createStore(counterReducer);;