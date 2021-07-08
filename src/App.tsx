import React from 'react';
// import { Route, Switch } from 'react-router-dom';

// import Error from './components/Error/Error';
import Home from './components/Home/Home';
import { PageContextComp } from './context/PageContext';
// import ChooseFrom from './components/ChooseFrom/ChooseFrom';

function App() {
  return (
    <PageContextComp>
      <Home />
    </PageContextComp>
    // <Switch>
    //   <Route path={'/cf'} component={ChooseFrom} />
    //   <Route path={'/'} component={Home} exact />
    //
    //   <Route component={Error} />
    // </Switch>
  );
}

export default App;
