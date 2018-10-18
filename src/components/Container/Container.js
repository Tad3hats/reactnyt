import React from 'react';

import Search from '../Search/Search';






class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
        this.handleResult = this.handleResult.bind(this);
    }
    handleResult(event){
        console.log("in handle results")
        this.setState({
            results: event
        })
        console.log(this.state.results);
      
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