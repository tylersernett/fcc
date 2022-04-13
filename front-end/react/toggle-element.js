//https://www.freecodecamp.org/learn/front-end-development-libraries/react/use-state-to-toggle-an-element
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false //initialize to false
      };
      // bind this keyword to method so method can access it
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    // define method so it changes the visibility prop stored within state
    toggleVisibility() {
      this.setState(state => ({
        visibility: !state.visibility
      }))
    }
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }