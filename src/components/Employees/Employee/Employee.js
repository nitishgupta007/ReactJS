import React from 'react';
import './Employee.css';

const employee = ( props ) => {
 return (
    <div className="Employee">
        <p>I' am {props.name} and I am {props.age} year old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
        <div class="m-t-sm">
            <button type="text" class="clickable_button clickable_button_error" onClick={props.click}>DELETE</button>
        </div>
    </div> 
 )
};

export default  employee;