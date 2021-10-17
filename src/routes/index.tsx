import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// component pages
import HomePage from '../pages/HomePage';
import TourPage from '../pages/TourPage';

const RouteApp: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/tour"} component={TourPage} />
      </Switch>
    </Router>
  );
}

export default RouteApp