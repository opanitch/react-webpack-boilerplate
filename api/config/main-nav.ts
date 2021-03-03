import * as PAGE_NAMES from '../constants/page-names';
import * as ROUTES from '../constants/routes';

interface NavItemType {
  href: string;
  id: string;
  text: string;
}

// IMPORTANT: Order matters here
const mainNavItems: NavItemType[] = [
  {
    href: ROUTES.HOME,
    id: PAGE_NAMES.HOME,
    text: `{{@ cms.site.navigation.home @}}`,
  },
  // {
  //   href: ROUTES.PORTFOLIO,
  //   id: PAGE_NAMES.PORTFOLIO,
  //   text: `{{@ cms.site.navigation.portfolio @}}`,
  // },
];

export default mainNavItems;
