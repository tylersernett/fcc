//17: https://www.freecodecamp.org/learn/front-end-development-libraries/redux/copy-an-object-with-object-assign
const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            //Object.assign({}, obj1, obj2)
            //creates object copy where properties are merged
            return Object.assign({}, state, { status: 'online' })
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);