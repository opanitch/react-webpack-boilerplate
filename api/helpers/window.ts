import { BREAKPOINT_LABELS, BREAKPOINT_SIZES } from 'CONSTANTS/breakpoints';

export type WindowBreakpointSizes = UnionOf<typeof BREAKPOINT_SIZES>;
export type WindowBreakpointLabels = UnionOf<typeof BREAKPOINT_LABELS>;

export type WindowDimensions = {
  height: Window['innerHeight'];
  width: Window['innerWidth'];
};

export const getViewportDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export const getViewportBreakpoint = ({
  width,
  height,
}: WindowDimensions): WindowBreakpointLabels => {
  if (width > BREAKPOINT_SIZES.LARGE) {
    return BREAKPOINT_LABELS.XLARGE;
  } else if (
    width < BREAKPOINT_SIZES.LARGE &&
    width > BREAKPOINT_SIZES.MEDIUM
  ) {
    return BREAKPOINT_LABELS.LARGE;
  } else if (
    width < BREAKPOINT_SIZES.MEDIUM &&
    width > BREAKPOINT_SIZES.SMALL
  ) {
    return BREAKPOINT_LABELS.MEDIUM;
  } else {
    return BREAKPOINT_LABELS.SMALL;
  }
};
