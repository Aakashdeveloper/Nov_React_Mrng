import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";

class HotelDetails extends Component{
    constructor(){
        super()

        this.state={
            hotel:'',
            tripid:sessionStorage.getItem('tripid')
        }
    }

    render(){
        let {hotel} = this.state
        return(
           <div className="container">
               <div className="panel panel-info">
                   <div className="panel-heading">
                       <div className="row">
                            <div className="col-md-11">
                                <h3>{hotel.name}</h3>
                            </div>
                            <div className="col-md-1">
                                <Link to={`/list/${this.state.tripid}`} className="btn btn-danger">Back</Link>
                            </div>
                       </div>
                        
                   </div>
                  <div className="panel-body">
                      <div className="row">
                          <div className="col-md-12">
                              <img className="img-responsive" src={hotel.thumb}
                              style={{width:1500,height:400}}/>
                          </div>
                          <div className="col-md-12">
                              <h3>{hotel.name}</h3>
                              <h3>{hotel.locality}</h3>
                              <h3>{hotel.address}</h3>
                          </div>
                        <hr/>
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Contact</Tab>
                                    <Tab>Aminities</Tab>
                                    <Tab>Gallery</Tab>
                                </TabList>
                            
                                <TabPanel>
                                <h2>About The place</h2>
                                <h3>Cost: Rs.{hotel.cost}</h3>
                                </TabPanel>
                                <TabPanel>
                                <h2>Contact</h2>
                                <h3>Phone Number: 78678678875</h3>
                                </TabPanel>
                                <TabPanel>
                                <h2>Aminities</h2>
                                </TabPanel>
                                <TabPanel>
                                <h2>Gallery</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                       &nbsp;
                        <Link to={`/bookings/${hotel._id}`} className="btn btn-success">Book Hotel</Link>
                      </div>
                  </div>
               </div>
           </div>
        )
    }

    async componentDidMount(){
        const hotelid = this.props.match.params.id;
        const response = await axios.get(`${url}/${hotelid}`);
        this.setState({hotel:response.data[0]})
    }
}


export default HotelDetails;