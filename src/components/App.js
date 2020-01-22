import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from './Context';
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
      loading: false,
      defaultTopics: ["cats", "dogs", "computers"]
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
    this.toggleLoadingState();
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
        this.toggleLoadingState();
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

  toggleLoadingState = () => {
    this.setState({ loading: !this.state.loading });
  }

  // fetchData = async (query) => {
  //   const getUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
  //   return await axios
  //     .get(getUrl)
  //     .then(response => {
  //       // console.log(response);
  //       return {
  //         success: true,
  //         data: response.data.photos.photo
  //       }
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

  // fetchMultipleData = async () => {
  //   const networkingRequestPromises = this.state.defaultTopics.map(this.fetchData);
  //   return await Promise.all(networkingRequestPromises);
  // }

  // get random 24 from 3 default topics
  
  // getDefaultPhotos = () => {
  //   const combined = this.state.defaultTopics
  //     .map(topic => Object.values(topic)[0])
  //     .reduce((a,b) => a.concat(b));
  //   const shuffled = this.shuffleArray(combined);
  //   const sliced = shuffled.slice(0,24);
  
  //   this.setState({
  //     photos: sliced,
  //     loading: false
  //   })
  // }

  // populateDefaultPhotos = () => {
  //   this.fetchMultipleData()
  //     .then(response => {
  //       this.toggleLoadingState();
  //       const newState = this.state.defaultTopics
  //         .map((topic, idx) =>  {
  //           const obj = new Object();
  //           obj[topic] = response[idx].data;
  //           return obj;
  //         });

  //       this.setState({ defaultTopics: newState }, this.getDefaultPhotos);
  //     })
  // }

  // get 24 from 1 default topic

  // Helper, borrowed from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
  // shuffleArray = array => {
  //   const copy = [...array];
  //   for (let i = copy.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * i)
  //     const temp = copy[i]
  //     copy[i] = copy[j]
  //     copy[j] = temp
  //   }
  
  //   return copy;
  // }

  render() {
    return (
      <Provider value={{
        photos: this.state.photos,
        query: this.state.query,
        loading: this.state.loading,
        defaultTopics: this.state.defaultTopics,
        actions: {
          handleSearch: this.handleSearch
        }
      }}>
        <div className="App">
          <SearchForm handleSearch={this.handleSearch} />
          <Nav />
          
          <Switch>
            <Route exact path="/" render={() => <PhotoContainer  /> } />

            {/* can't base route off query string 
            https://stackoverflow.com/questions/54635470/how-to-render-components-with-query-strings-react-router */}

            <Route path="/search" render={() => <PhotoContainer /> } />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
