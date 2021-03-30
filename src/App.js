import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Bottonnavigation from './components/Mainnav';
import Trending from './components/pages/trending/Trending';
import Movies from './components/pages/movies/movies';
import Series from './components/pages/series/series';
import Search from './components/pages/search/search';
function App() {
  return (
    <>
    <BrowserRouter>
      <Container>
       <Switch>
         <Route path="/" exact component={Trending}/>
         <Route path="/movies" component={Movies}/>
         <Route path="/series" component={Series}/>
         <Route path="/search" component={Search}/>
       </Switch>
      </Container>
    </BrowserRouter>
  <Header/>
  <div className="app">
  </div>
  <Bottonnavigation/>
    </>
  );
}

export default App;
