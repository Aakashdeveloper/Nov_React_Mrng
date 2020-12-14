import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionfile';
import PropTypes from 'prop-types';
import DisplayMovies from '../component/displayMovies'

class Home extends Component{
    //calling action
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayMovies datalist={this.props.mydata}/>
            </div>
        )
    }

}

//to get data from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films //should be same as mention in the main reducer
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home);