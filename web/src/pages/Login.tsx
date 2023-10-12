import { ReactElement, FC } from 'react';
import { Grid, Typography } from '@mui/material';
import agree from '../assets/img/agreement.png';
import { LoginForm } from '../components/Login';

const Login: FC = (): ReactElement => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h1" textAlign="center">
          iAgree
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" textAlign="center">
          Simplify, Organize, and Stay on Top of Your Agreements
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <img src={agree} alt="login-iagree" height="300px" width="400px" />
      </Grid>

      <Grid item xs={12}>
        <LoginForm />
      </Grid>
    </>
  );
};

export default Login;
