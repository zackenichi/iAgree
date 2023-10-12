import { ReactElement, FC } from 'react';
import { Grid, Typography } from '@mui/material';
import login from '../assets/img/login.png';

const Login: FC = (): ReactElement => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          Login
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <img src={login} alt="login" height="300px" width="300px" />
      </Grid>
    </>
  );
};

export default Login;
