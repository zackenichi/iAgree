import { Box, Drawer } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

/***
 * This is a wrapper component for all sideDrawers
 * @param children
 */

interface SideDrawerProps {
  children: React.ReactNode;
}

const SideDrawer: FC<SideDrawerProps> = ({ children }) => {
  const openDrawer = useSelector((state: RootState) => state.ui.isDrawerOpen);

  return (
    <Drawer anchor="right" open={openDrawer} onClose={() => {}}>
      <Box sx={{ width: { md: 400, xs: '100vw' } }} p={4}>
        {children}
      </Box>
    </Drawer>
  );
};

export { SideDrawer };
