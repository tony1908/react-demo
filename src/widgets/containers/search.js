import React, { Component } from 'react';
import Search from '../components/search'

class SearchContainer extends Component {

    state = {
        value: 'Luis Fonsi'
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value, ' submit')
    }

    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = element => {
        this.setState({
            value: event.target.value.replace(' ','-')
        })
    }

    render() {
        return(
            <Search 
                setRef = {this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
            />
        )
    }
}

export default SearchContainer;