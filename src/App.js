import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Header from './Components/Header';
import Books from './Components/Books';
import SearchInput from './Components/SearchInput';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books:[],
      text:'Harry Potter'
    }
  }

  componentWillMount(){
    this.getBooks();
  }

  getBooks(){
    axios.request({
      method:'get',
      url:'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange = (text) => {
    this.setState({text: text}, this.getBooks())
  }
  render() {
    return (
      <div className="App">
        <Header />
              <SearchInput  onChange={this.handleChange} value={this.state.text}/>
              <Books books={this.state.books} />
          
      </div>
    );
  }
}

export default App;
