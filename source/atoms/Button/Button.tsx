import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  buttonType?: string;
};

export enum ButtonType {
  BASE = 'BASE',
  PRIMARY = 'PRIMARY',
}

const Button: FunctionComponent<ButtonProps> = ({
  buttonType = 'BASE',
  className: parentClasses,
  disabled = false,
  ...props
}) => {
  const buttonBaseState = !disabled;
  const buttonHoverState = !disabled;
  const buttonDisabledState = disabled;

  return (
    <button
      className={classnames(
        'block',
        {
          // Base State
          ['']: buttonType === ButtonType.BASE,
          ['px-3 py-1 border-2 border-transparent rounded-md']:
            buttonType === ButtonType.PRIMARY,
        },
        {
          // Base Theming
          ['']: buttonBaseState && buttonType === ButtonType.BASE,
          ['bg-grey-12 border-white text-white']:
            buttonBaseState && buttonType === ButtonType.PRIMARY,
        },
        {
          // Hover State
          ['']: buttonHoverState && buttonType === ButtonType.BASE,
          ['hover:bg-white hover:border-grey-12 hover:text-grey-12']:
            buttonHoverState && buttonType === ButtonType.PRIMARY,
        },
        {
          // Disabled State
          ['pointer-events-none cursor-pointer']: buttonDisabledState,
          ['']: buttonDisabledState && buttonType === ButtonType.BASE,
          ['bg-grey-10 border-grey-10 text-grey-11']:
            buttonDisabledState && buttonType === ButtonType.PRIMARY,
        },
        parentClasses
      )}
      disabled={disabled}
      {...props}
    />
  );
};

export default Button;
