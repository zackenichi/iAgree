import { useMediaQuery } from '@mui/material';

export const useIsSmallScreen = () => {
  return useMediaQuery('(max-width: 1024px)');
};
