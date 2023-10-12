import { ReactElement, FC } from 'react';
import { Box, Typography } from '@mui/material';

const Login: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2">Login</Typography>
    </Box>
  );
};

export default Login;
