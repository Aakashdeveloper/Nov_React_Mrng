import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Main';
import Header from './Header';
import Footer from './Footer'
import ListingApi from './listing/listingApi';
import HotelDetails from './details/hotelDetails'
import BookingApi from './booking/BookingApi';
import PlaceBooking from './booking/placeBooking';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/list/:id" component={ListingApi}/>
                <Route path="/details/:id" component={HotelDetails}/>
                <Route exact path="/bookings" component={BookingApi}/>
                <Route path="/bookings/:id" component={PlaceBooking}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;