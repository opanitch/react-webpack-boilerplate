import { useEffect, useState } from 'react';

import {
  WindowBreakpointLabels,
  WindowDimensions,
  getViewportBreakpoint,
  getViewportDimensions,
} from 'HELPERS/window';

export const useWindowBreakpoint = (): WindowBreakpointLabels => {
  const dimensions = getViewportDimensions();
  const [windowBreakpoint, setWindowBreakpoint]: [
    WindowBreakpointLabels,
    React.Dispatch<React.SetStateAction<WindowBreakpointLabels>>
  ] = useState(getViewportBreakpoint(dimensions));

  useEffect(() => {
    const handleResize = () => {
      const dimensions = getViewportDimensions();

      setWindowBreakpoint(getViewportBreakpoint(dimensions));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowBreakpoint;
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(
    getViewportDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getViewportDimensions());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
