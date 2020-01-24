import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

import '../css/App.css';


const App = () => (
  <div className="App">
    <SearchForm />
    <Nav />
    
    <Switch>
      <Route exact path="/" component={PhotoContainer} />
      <Route exact path="/main/:topic" component={PhotoContainer} />
      <Route exact path="/search" component={PhotoContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
