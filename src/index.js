import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';
import UserList from './components/user-list';


const base_url = "https://jsonplaceholder.typicode.com";

// create new componenet and put on the page

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { users: [{ email: "afrozek95@gmail.com" }, { email: "dog@gmail.com" }] };

        // ()=> {
        // 	this.setState({users: ['afroze']})
        // };



    }



    render() {
        return ( 
        <div>
            <h1> Root of APP </h1>
            <SearchBar ></SearchBar>
            <UserList users={this.state.users}></UserList>
        </div>
        )
    }
} //end class

ReactDOM.render( < App / > , document.querySelector('.container'));