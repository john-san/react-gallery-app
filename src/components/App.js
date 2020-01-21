import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import '../css/App.css';
import apiKey from './../config';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      photos: [],
      query: props.location.pathname.slice(1)
    };
  } 

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    if (this.state.query.length > 0) {
      query = this.state.query;
    }
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

  // update query state and then run performSearch after query state has been updated
  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery
    },
      this.performSearch
    )
  }
  


  render() {
    return (
      <div className="App">
        <SearchForm onSearch={this.performSearch} />
        <Nav data={this.state.photos} updateQuery={this.updateQuery} />
        
        <Route exact path="/" render={() => <PhotoContainer data={this.state.photos} /> } />
        <Route path="/cats" render={() => <PhotoContainer data={this.state.photos} /> } />
        <Route path="/dogs" render={() => <PhotoContainer data={this.state.photos} /> } />
        <Route path="/computers" render={() => <PhotoContainer data={this.state.photos} /> } />

      </div>
    );
  }
}

export default App;
