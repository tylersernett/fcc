//https://www.freecodecamp.org/learn/front-end-development-libraries/react/create-a-controlled-form
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //update state.input to what we receive in the input box
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    //update state.submit to the new input
    event.preventDefault() //You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.
    this.setState( state=>({
      submit: this.state.input
    }))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* state.input gets updated as we type, which in turn updates the <input value=""> attribute */}
          <input onChange={this.handleChange} value={this.state.input} />
          <button type='submit'>Submit!</button>
        </form>
        {/* render state.submit to the screen */}
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}