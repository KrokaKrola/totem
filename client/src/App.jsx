import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home';
import withLayout from 'hocs/withLayout';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default withLayout(App);
