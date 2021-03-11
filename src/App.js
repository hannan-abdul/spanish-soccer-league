import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import NoTeam from './components/NoTeam/NoTeam';

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
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/team/:idTeam">
              <LeagueDetail />
            </Route>
            <Route path="*">
              <NoTeam></NoTeam>
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
