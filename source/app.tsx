import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { VideoBackground } from 'Atoms';
import { SiteFooter, SiteHeader } from 'Components';

import routeConfig from './route-config';

export const App: FunctionComponent = () => (
  <Router>
    <VideoBackground className="z-0" />
    <SiteHeader className="z-1" />
    <Switch>
      {routeConfig.map((route, index) => {
        const Component = route.component;
        const path = route.path;

        return (
          <Route
            key={index}
            path={path}
            exact={true}
            render={(props) => (
              <Component className="relative z-1" {...props} />
            )}
          />
        );
      })}
    </Switch>
    <SiteFooter className="z-1" />
  </Router>
);

export default App;
