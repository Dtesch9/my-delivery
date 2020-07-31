import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import CreateDelivery from '../pages/CreateDelivery';
import Deliveries from '../pages/Deliveries';
import RoutePath from '../pages/RoutePath';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateDelivery} />
        <Route path="/deliveries" component={Deliveries} />
        <Route path="/delivery_path" component={RoutePath} />
      </Switch>
    </Router>
  );
};

export default Routes;
