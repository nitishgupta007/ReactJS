import React, { Component } from 'react';
import Employee from './Employee/Employee';

class Employees extends Component {
    render () {
        return this.props.persons.map((person, index) =>{
            return <Employee 
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)} />
          });
    }
}
export default Employees;