import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import React, {useEffect, useState } from 'react';
import FlagPage from './Pages/FlagPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component = {Homepage}/>
          <Route exact path="/:code" component = {FlagPage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
