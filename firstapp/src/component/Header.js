import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React State App',
            keyword:'User Text Here'
        }
    }

    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({keyword:event.target.value})
    }

    render(){
        console.log("inside render");
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input placeholder="Enter your Keyword" onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}

export default Header;