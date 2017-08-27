import React, { Component } from 'react';


class SearchBar extends Component {

    //initialize
    constructor(props) {
        super(props);

        //can only init state here in this way
        this.state = { term: 'intitial state value' }
    }

    render() {
        return ( 
        <div>
            <input value = { this.state.term }
            onChange = { this.onInputChange.bind(this) }
            ></input> 
            <p> { this.state.term } </p> 
        </div>
        )
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
        console.log(this.state);

    }
}

export default SearchBar;