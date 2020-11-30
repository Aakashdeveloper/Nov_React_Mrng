import React,{Component} from 'react';
import ViewBooking from './ViewBooking';
import axios from 'axios';

const url ="https://developerfunnel.herokuapp.com/allBooking";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <ViewBooking bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(url);
        this.setState({booking:response.data})
    }
}

export default Booking;