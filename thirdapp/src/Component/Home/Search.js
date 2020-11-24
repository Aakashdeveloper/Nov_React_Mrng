import React,{Component} from 'react';
import './Search.css';

const locationUrl = "https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    //1
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        console.log("data is>>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.city_name}
                    </option>
                )
            })
        }
    }

    handleCity=(event)=>{
        const cityId = event.target.value;
        fetch(`${hotelUrl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    //2
    render(){
        return(
            <div className="imageContainer">
               <div id="logo">
                   D!
               </div>
               <div className="heading">
                   Plan Trip With Us
               </div>
               <div className="locationSelector">
                   <select className="locationDropDown" onChange={this.handleCity}>
                       <option>------Select City------</option>
                       {this.renderCity(this.state.location)}
                   </select>
                   <select className="reataurantsinput">
                       <option>------Select Hotel------</option>
                       {this.renderHotel(this.state.hotels)}
                   </select>
               </div>
            </div>
        )
    }

    //3
    componentDidMount(){
        fetch(locationUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {
            this.setState({location:err})
        })
    }
}

export default Search;