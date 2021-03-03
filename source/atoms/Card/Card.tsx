import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type CardProps = JSX.IntrinsicElements['div'];

const Card: FunctionComponent<CardProps> = ({
  children,
  className: parentClasses,
  ...props
}) => {
  return (
    <div
      className={classnames(
        'p-3 bg-white bg-opacity-90 shadow-lg md:p-4',
        parentClasses
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
