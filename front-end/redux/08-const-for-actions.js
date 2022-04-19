//08: https://www.freecodecamp.org/learn/front-end-development-libraries/redux/use-const-for-action-types

//match constatnts to strings
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }

        default:
            return state;

    }

};

const store = Redux.createStore(authReducer);


//action creators:
const loginUser = () => {
    return {
        type: LOGIN
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT
    }
};