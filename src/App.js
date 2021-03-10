import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App" >
      <div className="container">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/league/:idTeam">
              <LeagueDetail />
            </Route>
            <Route path="/dashboard">
              
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
