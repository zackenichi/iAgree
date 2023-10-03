import { Box, Grid } from '@mui/material';
import React, { FC } from 'react';

interface ContentAreaProps {
  children: React.ReactNode;
}

const ContentArea: FC<ContentAreaProps> = ({ children }) => {
  return (
    <Box
      sx={{
        gridArea: 'main',
        maxHeight: 'calc(100vh - 64px)',
        p: 4,
      }}
    >
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  );
};

export { ContentArea };
