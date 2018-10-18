import React from 'react';
import './Search.css';
import axios from 'axios';





class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryInfo: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSearch(event) {

        this.setState({
            queryInfo: event.target.value
        })
    }
    handleSubmit() {
        alert(this.state.queryInfo);
        const query = {
            params: {
              api_key: "611c17e5bafd43e280f1618d70703548",
              q: this.state.queryInfo
            }
          }
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', query).then(response => {
            this.props.setResults(response.data.response.docs);
            this.setState({ search_term: '', begin_date: undefined, end_date: undefined });
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleSearch} className="searchInput" placeholder="type a search term" />
                <button onClick={this.handleSubmit}>submit</button>
            </div>
        )
    }
}



export default Search;