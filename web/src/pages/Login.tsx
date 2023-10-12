import { ReactElement, FC } from 'react';
import { Container, Grid, Typography } from '@mui/material';

import { LoginForm, Signup } from '../components/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Card } from '../components/Card';

const Login: FC = (): ReactElement => {
  const showSignUp = useSelector((state: RootState) => state.ui.showSignUp);
  return (
    <Card sx={{ marginTop: showSignUp ? 15 : 10 }}>
      <Container maxWidth="xs">
        <Grid container spacing={2}>
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
        </Grid>
      </Container>
    </Card>
  );
};

export default Login;
