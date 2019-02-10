import React, { Component } from 'react';
import { Well, FormControl } from 'react-bootstrap';


class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        });
        this.props.onChange(this.state.value);
    }
  render() {
    return (

            <FormControl 
            type="text"
            value={this.state.value}
            placeholder="Search a book"
            onChange={this.onChange}/>

    );
  }
}

export default SearchInput;
