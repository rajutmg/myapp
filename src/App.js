import { Container } from '@material-ui/core';
import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Bottonnavigation from './components/Mainnav';
import Trending from './components/pages/trending/Trending';
import Movies from './components/pages/movies/Movies';
import Series from './components/pages/series/Series';
import Search from './components/pages/search/Search';
function App() {
  return (
    <>
  <Header/>
  <div className="app">
  <Container>
       <Switch>
         <Route path="/" exact component={Trending}/>
         <Route path="/movies" component={Movies}/>
         <Route path="/series" component={Series}/>
         <Route path="/search" component={Search}/>
       </Switch>
      </Container>
  </div>
  <Bottonnavigation/>
    </>
  );
}

export default App;
