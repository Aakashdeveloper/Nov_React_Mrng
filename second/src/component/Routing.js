import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import PostDetails from './PostDetails'
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/post" component={Post}/>
            <Route path="/post/:topic" component={PostDetails}/>
            <Route path="/profile" component={Profile}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;
