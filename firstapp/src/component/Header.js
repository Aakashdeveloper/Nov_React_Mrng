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

    handleChange=(e)=>{
        //console.log(e.target.value);
        this.setState({keyword:e.target.value?e.target.value:'User Text Here'})
        this.props.userText(e.target.value)
    }

    render(){
        //console.log("inside render");
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