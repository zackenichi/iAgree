import { ReactElement, FC } from 'react';
import { Box, Typography } from '@mui/material';

const Home: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2">Home</Typography>
    </Box>
  );
};

export default Home;
