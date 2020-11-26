import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Main';
import Header from './Header';
import Footer from './Footer'
import ListingApi from './listing/listingApi';
import HotelDetails from './details/hotelDetails'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:id" component={ListingApi}/>
                <Route exact path="/details/:id" component={HotelDetails}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;