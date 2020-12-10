//Get Initial State
//Set Initial State
//Before Get Created
//Render
//After Get Created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //1Get Initial State
    constructor(props){
        super()

        //2set initial state
        this.state={
            title:'LifeCycle'
        }

        console.log(">>>>>stage constructor 1 & 2")
    }

    componentWillMount(){
        console.log(">>>>> componentWillMount stage 3")
    }

    componentWillUpdate(){
        console.log(">>>>> componentWillUpdate")
    }

    componentDidUpdate(){
        console.log(">>>>> componentDidUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>> shouldComponentUpdate")
        if(nextState.title == this.state.title){
            return false
        }else{
            return true
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log(">>>>> getDerivedStateFromProps ",props)
        console.log(">>>>> getDerivedStateFromProps ",state)
    }

    //4 render
    render(){
        console.log(">>>>> render stage 4")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success" onClick={()=>{this.setState({title:'Something Else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log(">>>>> componentDidMount stage 5")
    }
    
    componentWillUnmount(){
        alert("Do You want to leave")
    }


}

export default LifeCycle;