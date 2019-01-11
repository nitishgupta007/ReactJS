import React from 'react';
import Employee from './Employee/Employee';

const employees = (props) =>
    props.persons.map((person, index) =>{
        return <Employee 
          click={() => props.clicked(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(event) => props.changed(event, person.id)} />
      });

export default employees;      