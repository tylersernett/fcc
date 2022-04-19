//09: https://www.freecodecamp.org/learn/front-end-development-libraries/redux/register-a-store-listener
const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// function that adds 1 to count
const addOne = () => (count += 1);
store.subscribe(addOne);
//subscribe method: called anytime an action is dispatched

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);