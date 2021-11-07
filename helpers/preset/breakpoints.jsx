import useWindowDimensions from '@/helpers/functional/useWindowDimensions.ts';

const bp = {
  mobile: 768,
  tablet: 1150,
};

const isMobile = () => {
  const { width, height } = useWindowDimensions();
  if (width < bp.mobile) {
    return true;
  } else {
    return false;
  }
};

const isTablet = () => {
  const { width, height } = useWindowDimensions();
  if (width < bp.tablet && width >= bp.mobile) {
    return true;
  } else {
    return false;
  }
};

export { bp, isMobile, isTablet };
