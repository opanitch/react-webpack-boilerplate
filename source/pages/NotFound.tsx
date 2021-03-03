import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { NOT_FOUND } from '../../api/constants/page-names';

import { FullWidthContainer } from '../components';

const NotFound: FunctionComponent<Page> = ({
  className: parentClasses,
}: {
  className: string;
}) => {
  return (
    <FullWidthContainer
      id={NOT_FOUND}
      className={classnames('pb-5', parentClasses)}
    >
      {({ ChildContainer }) => (
        <ChildContainer>
          <p>{`{{@ cms.not-found.title @}}`} 1</p>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default NotFound;
