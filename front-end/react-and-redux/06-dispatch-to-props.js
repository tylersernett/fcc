//06: https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/map-dispatch-to-props
const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

//Write the function mapDispatchToProps() that takes dispatch as an argument, then returns an object. The object should have a property submitNewMessage set to the dispatch function, which takes a parameter for the new message to add when it dispatches addMessage().
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: msg => {
            dispatch(addMessage(msg))
        }
    }
}