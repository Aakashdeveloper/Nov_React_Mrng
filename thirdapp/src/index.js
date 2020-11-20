import React from 'react';
import ReactDOM from 'react-dom';
import {BrowSerRouter,Route,Link} from 'react-router-dom';
import Home from './component/Home';
import Post from './component/Post';
import Profile from './component/Profile';

ReactDOM.render(
    <BrowSerRouter>
        <Route path="/" component={Home}/>
        <Route path="/"
    </BrowSerRouter>
)
