import React,{Component} from 'react';
import axios from 'axios';

const curl = "https://developerfunnel.herokuapp.com/hotellist"

class CostFilter extends Component{
    filterCost = (e) => {
        let cost = (e.target.value).split(',');
        let lcost = Number(cost[0]);
        let hcost = Number(cost[1]);
        let TripType = sessionStorage.getItem('tripid');
        let ccurl;
        if(cost==""){
            ccurl = `${curl}/${TripType}`
        }else{
            ccurl = `${curl}/${TripType}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(ccurl)
        .then((response) => {this.props.filterpercost(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center> Cost Type</center>
                <div onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="room"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="room"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,9000" name="room"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001,20000" name="room"/>9001-20000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;