import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>
      <Route exact path='/' component = {Login} />
      <Route exact path='/register' component = {Register} />
      <Route exact path='/projects' component = {Projects} />

      </Switch>

    </Router>
  );
}

export default App;
