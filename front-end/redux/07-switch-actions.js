//7: https://www.freecodecamp.org/learn/front-end-development-libraries/redux/use-a-switch-statement-to-handle-multiple-actions
const defaultState = {
    authenticated: false
  };
  
  //actions passed in with a type property.
  //return current state if n/a
  const authReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "LOGIN": 
        return {authenticated: true}
        break;
      case "LOGOUT": 
        return {authenticated: false} 
        break;   
      default: return state;
    }
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };