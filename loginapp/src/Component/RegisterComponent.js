import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const rurl ="http://localhost:5000/api/auth/register";

class RegisterComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }



    handleName = (event) => {
        this.setState({name:event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password:event.target.value})
    }

    handleSubmit=()=>{
        console.log(this.state)
        fetch(rurl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((this.props.history.push('/login')))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Register</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Name:</label>
                            <input type="text" name="name" value={this.state.name} className="form-control"
                            onChange={this.handleName}/>
                        </div>
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
                        <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default RegisterComponent;