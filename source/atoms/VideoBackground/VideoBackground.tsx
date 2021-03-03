import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import VideoPoster from 'ASSETS/images/video-placeholder.jpg';

type FormProps = JSX.IntrinsicElements['div'];

const TextInput: FunctionComponent<FormProps> = ({
  className: ParentClasses,
}) => {
  return (
    <div
      className="absolute w-full h-screen overflow-hidden bg-black bg-no-repeat"
      style={{
        backgroundImage: `url(${VideoPoster})`,
        backgroundPosition: 'top center',
        backgroundSize: 'auto 100%',
      }}
    >
      <iframe
        className={classnames(
          'absolute top-0 left-1/2 h-full w-1920',
          ParentClasses
        )}
        src="https://player.vimeo.com/video/407193331?title=0&portrait=0&byline=0&autoplay=1&loop=1&background=1"
        style={{ transform: 'translate(-50%, 0%)' }}
      />
    </div>
  );
};

export default TextInput;
