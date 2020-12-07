import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const lurl ="http://localhost:5000/api/auth/login";

class LoginComponent extends Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }

    handleEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password:event.target.value})
    }

    handleSubmit=()=>{
        console.log(this.state)
        fetch(lurl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem('ltk',data.token)
            this.props.history.push('/profile')
        })
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h4>Login</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Email:</label>
                            <input type="text" name="name" value={this.state.email} className="form-control"
                            onChange={this.handleEmail}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password:</label>
                            <input type="text" name="name" value={this.state.password} className="form-control"
                            onChange={this.handlePassword}/>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default LoginComponent;