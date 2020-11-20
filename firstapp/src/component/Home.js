import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews=(userInput)=>{
        console.log("userInput in home>>>",userInput);
        const Output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        })
        this.setState({filtered:Output})
    }


    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(data)=>{this.filterNews(data)}}/>
                <NewsDisplay newsData={this.state.filtered}/>
                <Footer year="2021" month='Nov'/>
            </React.Fragment>
        )
    }
    
}

export default Home;