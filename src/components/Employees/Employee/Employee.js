import React, { Component } from 'react';
import './Employee.css';
import propTypes from 'prop-types';

class Employee extends Component {
    render () {
        return (
            <div className="Employee">
                <p>I' am {this.props.name} and I am {this.props.age} year old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <div className="m-t-sm">
                    <button type="text" className="clickable_button clickable_button_error" onClick={this.props.click}>DELETE</button>
                </div>
            </div> 
        )
    }
}
Employee.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
}

export default  Employee;