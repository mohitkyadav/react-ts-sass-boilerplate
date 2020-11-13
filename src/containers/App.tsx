import React, {FC} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';
import Home from './Home';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
