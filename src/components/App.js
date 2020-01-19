import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import '../css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchForm />
        <Nav />
        <PhotoContainer />
        
      </div>
    );
  }
}

export default App;
