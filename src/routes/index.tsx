import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// component pages
import HomePage from '../pages/HomePage';
import TourPage from '../pages/TourPage';
// import TourDetailPage from '../pages/TourDetailPage';

const RouteApp: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/tour"} exact component={TourPage} />
        {/* <Route path={"/tour/:id"} children={TourDetailPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouteApp