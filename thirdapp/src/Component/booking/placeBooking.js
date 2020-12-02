import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const hotelurl ="https://developerfunnel.herokuapp.com/hotelsdetails";
const burl=""

class PlaceBooking extends Component{
    constructor(){
        super()

        this.state={
            order_id:Math.floor(Math.random()*10000),
            hotel_name:'',
            name:'',
            phone:''
        }
    }

    async componentDidMount(){
        const hotelid = this.props.match.params.id;
        const response = await axios.get(`${hotelurl}/${hotelid}`);
        this.setState({hotel_name:response.data[0].name})
    }

    handleName = (event) => {
        this.setState({name:event.target.value})
    }

    handlePhone = (event) => {
        this.setState({phone:event.target.value})
    }

    handleSubmit=()=>{
        console.log(this.state)
        fetch(burl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((this.props.history.push('/bookings')))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Booking for hotel {this.state.hotel_name}</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_Id:</label>
                            <input type="text" name="order_id" value={this.state.order_id} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">HotelName:</label>
                            <input type="text" name="hotel_name" value={this.state.hotel_name} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name:</label>
                            <input type="text" name="name" value={this.state.name} className="form-control"
                            onChange={this.handleName}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone:</label>
                            <input type="text" name="phone" value={this.state.phone} className="form-control"
                            onChange={this.handlePhone}/>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}


export default PlaceBooking;