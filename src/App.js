import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import Header from './components/elements/Header/Header';
//import Home from './Home/Home';
//import Game from './components/Game/Game';
//import NotFound from './components/elements/NotFound/NotFound';
import TopGames from "./TopGames";
import Search from "./Search";
import Nav from "./Nav";
import GameDetail from "./GameDetail";
import './App.css';

  function App  () {
  return (
   /* <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/:gameId" component={Game} exact />
          <Route component={NotFound} />
        </Routes>
    </BrowserRouter>
    */
   <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/topgames' component={TopGames} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/game/:name' component={GameDetail} />
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
