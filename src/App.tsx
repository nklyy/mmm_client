import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from './components/Error/Error';
import Home from './components/Home/Home';
import { PageContextComp } from './context/PageContext';
import ChooseFrom from './components/ChooseFrom/ChooseFrom';
import { AuthContextComp } from './context/AuthContext';

function App() {
  return (
    <PageContextComp>
      <AuthContextComp>
        <Switch>
          <Route path={'/cf'} component={ChooseFrom} exact />
          <Route path={'/'} component={Home} exact />

          <Route component={Error} />
        </Switch>
      </AuthContextComp>
    </PageContextComp>
  );
}

export default App;
