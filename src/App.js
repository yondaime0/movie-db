import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import TvPage from './pages/TvPage';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/moviepage/:id" component={MoviePage} exact />
        <Route path="/tvpage/:id" component={TvPage} exact />
      </Switch>
    </div>
  );
}

export default App;
