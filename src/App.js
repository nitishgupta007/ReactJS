import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee/Employee.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Nitish', age: 29 },
      { name: 'Sachin', age: 28 },
      { name: 'Gaurav', age: 20 }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>React app by nitish</h1>
        <p>This is really working</p>
        <button onClick={ () => this.switchNmaeHandler('Maximilaian!!')}>Click on</button>
        <Employee 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
          <Employee 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}/>
          <Employee 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
