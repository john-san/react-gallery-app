import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

import '../css/App.css';
import apiKey from './../config';

class App extends Component {
  constructor(props) {
    super(props);
    const { q } = queryString.parse(props.location.search);
    this.state = {
      photos: [],
      query: q,
      loading: false
    };
  } 

  componentDidMount() {
    this.performSearch();
  }

  // re-render on back/forward
  componentDidUpdate() {
    // updateQuery if query has somehow changed
    const { q } = queryString.parse(this.props.location.search);
    if (this.state.query !== q) {
      this.updateQuery(q);
    }
  }

  // grab data and update state for PhotoContainer
  performSearch = (query = 'cats') => {
    this.setState({ loading: true });
    // if query is given, override default param
    if (this.state.query) { query = this.state.query }
    const getUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    axios.get(getUrl)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
        console.log(response);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
      .finally(() => {
        this.setState({ loading: false });
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

  // handle URLs properly when performing search
  handleSearch = (newQuery) => {
    this.props.history.push({
      pathname: '/search',
      search: `?q=${newQuery}`
    });
    
    this.updateQuery(newQuery);
  }

  render() {
    return (
      <div className="App">
        <SearchForm handleSearch={this.handleSearch} />
        <Nav updateQuery={this.updateQuery} query={this.state.query} />
        
        <Switch>
          <Route exact path="/" render={() => <PhotoContainer isLoading={this.state.loading} data={this.state.photos} /> } />

          {/* can't base route off query string 
          https://stackoverflow.com/questions/54635470/how-to-render-components-with-query-strings-react-router */}

          <Route path="/search" render={() => <PhotoContainer isLoading={this.state.loading} data={this.state.photos} query={this.state.query} /> } />

          <Route component={NotFound} />
        </Switch>

      </div>
    );
  }
}

export default App;
