import React, { Component } from 'react';
import './App.css';
import Employee from '../components/Employees/Employee/Employee';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Nitish', age: 29 },
      { id:'2', name: 'Mayur', age: 30 },
      { id:'3', name: 'Gaurav', age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  togglepersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  namechangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => { 
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( { persons: persons } );
  }

  render() {
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Employee 
              click={this.deletePersonHandler}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.namechangeHandler(event, person.id)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>React app by nitish</h1>
        <p>This is really working</p>
        <button className="clickable_button" onClick={this.togglepersonsHandler}>Click on</button>
        {persons}
      </div>
    );
  }
}

export default App;
