import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './view/Home/Home';


import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}
