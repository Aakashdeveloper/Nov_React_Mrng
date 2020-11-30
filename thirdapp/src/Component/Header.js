import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav class="navbar navbar-inverse" style={{background:'teal',color:'white'}}>
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <Link class="navbar-brand" to="/" style={{color:'white'}}>Developer Funnel</Link>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav" >
                        <li ><Link to="/" style={{color:'white'}}>Home</Link></li>
                        <li ><Link to="/bookings" style={{color:'white'}}>Bookings</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}

export default Header;