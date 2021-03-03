import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import DownArrow from 'ASSETS/icons/chevron-down.svg';
import MobileDownload from 'ASSETS/icons/cellphone-down-arrow.svg';
import Download from 'ASSETS/icons/download.svg';

type IconProps = JSX.IntrinsicElements['img'] & {
  icon: string;
};

const iconConfig = {
  DownArrow,
  Download,
  MobileDownload,
};

const Icon: FunctionComponent<IconProps> = ({
  className: parentClasses,
  icon,
  src,
  ...props
}) => {
  // const iconSrc = iconConfig[icon];

  return <img className={classnames('', parentClasses)} src={src} {...props} />;
};

export default Icon;
