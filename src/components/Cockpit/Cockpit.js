import React from 'react';

const cockpit = ( props ) => {
    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p>This is really working</p>
            <button className="clickable_button" onClick={props.clicked}>Click on</button>
        </div>
    );
};

export default cockpit;