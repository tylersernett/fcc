//07: https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/connect-redux-to-react
const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
  };
  
  const mapStateToProps = (state) => {
    return {
        messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
  };
  
  class Presentational extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
  //The code editor has the mapStateToProps() and mapDispatchToProps() functions and a new React component 
  //called Presentational. Connect this component to Redux with the connect method from 
  //the ReactRedux global object, and call it immediately on the Presentational component. 
  //Assign the result to a new const called ConnectedComponent that represents the connected component. 
  //That's it, now you're connected to Redux!