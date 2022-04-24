//02: https://www.freecodecamp.org/learn/front-end-development-libraries/react-and-redux/manage-state-locally-first

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      //this bindings 
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
  
    //method definitions:
    handleChange(event) {
        this.setState({ input: event.target.value })
      }
    submitMessage() {
      this.setState( state=>({
        //alt approach: use concat method:
        //messages: this.state.messages.concat(this.state.input), BAD! can cause async issues
        //messages: state.messages.concat(state.input),
        messages: [...state.messages, state.input], //add to end of array
        //messages: [...this.state.messages, this.state.input], //BAD! can cause async issues, more info: https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
        input: '' //reset the input
      }))
    }
  
    render() {
      //approach 1: define renderList variable via .map before return() statement
      //const renderList = this.state.messages.map(item => <li key={item}>{item}</li>);
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>Add msg</button>
          {/*<ul>{renderList}</ul> approach 1*/}
          {/*approach 2: .map over array in JSX */}
          <ul>{this.state.messages.map(x=>{
              return <li key={x}>{x}</li>
            })}
          </ul>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };