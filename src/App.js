import React, { Component } from 'react';
import './App.css';

class App extends Component {   // inherited from react component
  constructor (props) {
    super(props);
    this.state = {      // responsible for how the component displays
      appTitle: "Hello World",
      appMessage: "My very first app in React"
    };  
  }

  render() {      // always returns jsx (not delimited)
    return (
      <div className="App">     {/* "className" instead of "class" in jsx - "class" is js keyword */}   
        <header className="App-header">
          <h1 className="App-title">{this.state.appTitle}</h1>
          <p>
            {this.state.appMessage}
          </p>
        </header>
      </div>
    );
  }
}

export default App;