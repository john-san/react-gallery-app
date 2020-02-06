import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { animateCSS } from '../../helpers';


const AppContext = React.createContext();

class Provider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      photos: [],
      query: '',
      loading: true,
      mainTopics: {
        "cats" : [], 
        "dogs" : [], 
        "computers": []
      }
    };
  } 


  /*** Lifecycle Methods ***/

  // grab photos for mainTopics on initial load
  componentDidMount() {
    this.getMainPhotos();
  }

  // re-render on back/forward
  componentDidUpdate() {
    this.checkPhotoState();
  }

  // for componentDidUpdate().  will check context based on url and update PhotoState appropriately
  checkPhotoState = () => {
    const path = this.props.location.pathname;
    const endOfPath = path.split('/').pop();
    const mainTopics = Object.keys(this.state.mainTopics);
    const pathIncludesMainTopic = mainTopics.some(topic => topic === endOfPath);
    if (path === "/") {
      if (this.state.query !== Object.keys(this.state.mainTopics)[0]) {
        this.updatePhotos();
      }
      
    } else if (path.includes('main') && pathIncludesMainTopic) {
      const query = path.split('/').pop();

      if (query !== this.state.query) {
        this.updatePhotos(query);
      } 
    } else if (path === "/search") {
      const { q } = queryString.parse(this.props.location.search);
      
      if (this.state.query !== q) {
        this.updateQuery(q);
      }
    } else if (path === '/page-not-found') {
      // do nothing
    } else {
      this.props.history.push('/page-not-found')
    }
  }

  /*** General ***/
  // must check if .photo-container has been rendered or else you occasionally get errors
  animateIfPossible = (animationName = 'fadeIn') => {
    if (document.querySelector('.photo-container')) {
      animateCSS('.photo-container', animationName);
    } 
  }

  /*** Data fetching from flickr API  ***/
  // fetch data from flickr API
  fetchData = async (query) => {
    try {
      const response = await axios.get("/.netlify/functions/token-hider?query=" + query);
      return {
        success: true,
        data: response.data.photos.photo
      }
    } catch(err) {
      console.log('Error fetching and parsing data', err);
    }
  }

  // run multiple requests from flickr API using an obj's keys
  fetchMultipleData = async (object) => {
    try {
      const networkingRequestPromises = Object.keys(object).map(this.fetchData);
      return await Promise.all(networkingRequestPromises);
    } catch(err) {
      console.log('Error fetching and parsing data for multiple requests', err);
    }
  }

  /*** Search Functionality  ***/
  // grab data and update state for PhotoContainer
  performSearch = (query = 'cats') => {
    this.setState({ loading: false })
    animateCSS('.photo-container', 'zoomInUp');

    this.fetchData(query)
      .then(response => {
        this.setState({ 
          photos: response.data,
          loading: false
          },
          animateCSS('.photo-container', 'zoomInUp'));
      })
  }

  // update query state and then run performSearch after query state has been updated
  updateQuery = (newQuery) => {
    this.setState({ query: newQuery },
      this.performSearch(newQuery)
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

  /*** Main Topic Functions  ***/
  // get photos for 3 mainTopics
  getMainPhotos = () => {
    this.fetchMultipleData(this.state.mainTopics)
      .then(response => {
        const mainTopicPhotos = response.map(topic => topic.data);
        // create copy and assign data values
        const newState = Object.assign({}, this.state.mainTopics);
        Object.keys(newState)
          .forEach((key, idx) => newState[key] = mainTopicPhotos[idx]);
        this.setState({ mainTopics: newState });
      })
  }

  // update Photos from and fadeIn
  updatePhotos = (mainTopic = Object.keys(this.state.mainTopics)[0]) => {
    this.setState({
      photos: this.state.mainTopics[mainTopic],
      query: mainTopic,
      loading: false
    },
      this.animateIfPossible
    );
  }

  render() {
    return (
      <AppContext.Provider 
        value={
          {
            photos: this.state.photos,
            query: this.state.query,
            loading: this.state.loading,
            mainTopics: this.state.mainTopics,
            actions: {
              handleSearch: this.handleSearch,
              updatePhotos: this.updatePhotos
            }       
          }
        }
      >
        { this.props.children }
      </AppContext.Provider>
     
    );
  }
}

// Provider needs access to BrowserRouter's location prop
// only way to export withRouter(Provider)
const Store = withRouter(Provider);
export { AppContext, Store };