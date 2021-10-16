import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// component pages
import HomePage from '../pages/HomePage';

const RouteApp: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default RouteApp