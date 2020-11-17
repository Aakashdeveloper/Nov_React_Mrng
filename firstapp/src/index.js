import React from 'react';
//var React = require('react');
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>My React App</h1>
            <h2>NareshIT</h2>
            <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));