import React from 'react';

import Search from '../Search/Search';
import axios from 'axios';






class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
        this.handleResult = this.handleResult.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleResult(event){
        console.log("in handle results")
        this.setState({
            results: event
        })
        console.log(this.state.results);
      
    }
    handleSave(id){
        alert(id);
        axios.post('/save', this.state.results[id]).then(res => {
            console.log(res, "---- this is the article that we saved");
        })
    }


    render(){
        return(
            <div> 
                <Search setResults={this.handleResult}/>
                {
                    this.state.results.map((e, index)=>{
                        return(
                            <div key={index}>
                                <a href={e.web_url} target="_blank">
                                <h3>{e.headline.main}</h3>
                                </a>
                                <button onClick={()=>this.handleSave(index)} id={index}>save</button>
                                <p>---------------------</p>
                            </div>
                        )
                    })
                }


            </div>
        )
    }

}



export default Container;