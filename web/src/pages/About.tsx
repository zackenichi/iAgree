import { ReactElement, FC } from 'react';
import { Box, Typography } from '@mui/material';

const About: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2">About</Typography>
    </Box>
  );
};

export default About;
