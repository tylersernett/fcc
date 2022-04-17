//https://www.freecodecamp.org/learn/front-end-development-libraries/react/create-a-controlled-input
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // this bindings
    this.handleChange = this.handleChange.bind(this);
  }
  // define method w/ 'event' parameter that sets the state's input as the value of the event
  handleChange(event){
    this.setState(//state=> not needed here since we aren't referencing the state itself for assignment
    ({input: event.target.value }))
  }
  render() {
    return (
      <div>
        { /*1. input changes handled by the handleChange method, which updates state.input 2. Then update props.value to state.input */}
    <input value={this.state.input} onChange={this.handleChange}></input>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};