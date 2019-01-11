import React, { Component } from 'react';
import './App.css';
import Employees from '../components/Employees/Employees';
import Cockpit from '../components/Cockpit/Cockpit';

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
          <Employees 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.namechangeHandler}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Cockpit 
        appTitle={this.props.title}
        clicked={this.togglepersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
