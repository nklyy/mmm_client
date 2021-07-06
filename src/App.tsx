import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Error from './components/Error/Error';
import Home from './components/Home/Home';

function App() {
  return (
    <Switch>
      <Route path={'/'} component={Home} />

      <Route component={Error} />
    </Switch>
  );
}

export default App;
