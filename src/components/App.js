import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import '../css/App.css';
import apiKey from './../config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  } 


  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
        console.log(response);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
      .finally(function () {

      });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchForm onSearch={this.performSearch} />
          <Nav performSearch={this.performSearch} />
          <PhotoContainer data={this.state.photos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
