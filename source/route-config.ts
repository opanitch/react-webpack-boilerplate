import { FunctionComponent } from 'react';

import * as ROUTES from 'CONSTANTS/routes';

import * as PAGES from 'Pages';

type RouteType = {
  component: FunctionComponent<Page>;
  path: string;
};

export interface RouteConfigType extends RouteType {
  routes?: RouteType[];
}

const routeConfig: RouteConfigType[] = [
  {
    component: PAGES.CONTACT,
    path: ROUTES.CONTACT,
  },
  {
    component: PAGES.HOMEPAGE,
    path: ROUTES.HOME,
  },
  {
    component: PAGES.NOT_FOUND,
    path: ROUTES.NOT_FOUND,
  },
  {
    component: PAGES.RESUME,
    path: ROUTES.RESUME,
  },
];

export default routeConfig;
