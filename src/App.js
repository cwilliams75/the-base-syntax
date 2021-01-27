import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'supermax' 
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
<p>1. Create TWO new component: UserInput and UserOutput </p>
<p>2. UserInput should hold an input element, UserOutput two paragraphs </p>
<p>3. Output multiple UserOutput components in the App component (any paragraph texts of your choice) </p>
<p>4. Pass a username (of your choice) to UserOutput via props and display it there </p>
<p>5. Add state to the App component (=> the username) and pass the username to the UserOutput component </p>
<p>6. Add a method to manipulate the state (=> an event-handler method) </p>
<p>7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event </p>
<p>8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput </p>
<p>9. Add two-way-binding to your input (in UserInput) to also display the starting username </p>
<p>10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets </p>

        <UserInput 
        changed={this.usernameChangeHandler}
        currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput  userName={this.state.username} />
        <UserOutput userName="Cydney"/>
      </div>
    );
  }
}

export default App;
