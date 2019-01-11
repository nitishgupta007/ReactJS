import React from 'react';
import './Employee.css';

const employee = ( props ) => {
 return (
    <div className="Employee">
        <p onClick={props.click} >I' am {props.name} and I am {props.age} year old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div> 
 )
};

export default  employee;