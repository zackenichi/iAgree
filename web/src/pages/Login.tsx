import { ReactElement, FC } from 'react';
import { Grid, Typography } from '@mui/material';

import { LoginForm, Signup } from '../components/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Login: FC = (): ReactElement => {
  const showSignUp = useSelector((state: RootState) => state.ui.showSignUp);
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h1" textAlign="center" id="iagree-title">
          iAgree
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" textAlign="center">
          Simplify, Organize, and Stay on Top of Your Agreements
        </Typography>
      </Grid>

      <Grid item xs={12}>
        {showSignUp ? <Signup /> : <LoginForm />}
      </Grid>
    </>
  );
};

export default Login;
