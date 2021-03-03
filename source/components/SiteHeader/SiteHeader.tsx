import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import GitHubIcon from 'ASSETS/icons/github.svg';

import mainNavItems from 'CONFIG/main-nav';

import { Header, Link, List, ListItem } from 'Atoms';

import { FullWidthContainer } from 'Components';

const SiteHeader: FunctionComponent<DivType> = ({
  className: parentClasses,
}) => {
  return (
    <FullWidthContainer className={classnames('relative', parentClasses)}>
      {({ ChildContainer }) => (
        <ChildContainer>
          <header className="flex items-end justify-between mb-4 text-white h-100">
            <Header
              className="mb-2 text-scale-8 font-logo"
              headerLevel={1}
              title="O.P"
            />
            {/* <div className="flex flex-col justify-end h-full"> */}
            <nav className="flex flex-col items-end">
              <div className="mb-3">
                <Link
                  className="block p-2 border-white rounded-md text-scale-n1 border-1"
                  href="https://github.com/opanitch/portfolio"
                  target="_blank"
                >
                  See on{' '}
                  <GitHubIcon className="inline-block fill-current text-scale-3" />
                </Link>
              </div>
              <List
                className="flex leading-none border-white font-coffee text-scale-6 pl-50 md:pl-100 border-b-1"
                isOrdered={false}
              >
                {mainNavItems.map((navItem, index) => {
                  return (
                    <ListItem
                      className={classnames({ 'ml-3': index > 0 }, 'px-1')}
                      key={index}
                    >
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
            {/* </div> */}
          </header>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default SiteHeader;
