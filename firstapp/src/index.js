import React from 'react';
//var React = require('react');
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>My React App</h1>
            <h2>NareshIT</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));