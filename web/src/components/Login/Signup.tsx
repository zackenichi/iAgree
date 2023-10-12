import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import {
  isStrongPassword,
  isValidEmail,
  isValueEmpty,
} from '../../utils/input';
import { useDispatch } from 'react-redux';
import { setShowSignUp } from '../../store/UiReducer';
import { signUpUser } from '../../firebase/firebase';
import { setNotification } from '../../store/NotificationReducer';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  name: '',
  organization: '',
  email: '',
  password: '',
};

const Signup: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, organization, email, password } = formFields;

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'email') {
      if (!isValidEmail(value) || isValueEmpty(value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (name === 'password') {
      if (!isStrongPassword(value)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    } else if (name === 'name') {
      if (isValueEmpty(value)) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    }

    setFormFields({ ...formFields, [name]: value });
  };

  const handleShowLogin = () => {
    dispatch(setShowSignUp(false));
  };

  const handleSignup = async () => {
    try {
      if (nameError || emailError || passwordError) {
        setEmailError(true);

        throw new Error('Invalid input');
      }

      const user = await signUpUser(email, password);

      if (!user) {
        throw new Error('User not created');
      }

      //   do something else for firebase DB

      //   snackbar

      dispatch(
        setNotification({
          message: 'Sign up Successful!',
          severity: 'success',
          open: true,
        })
      );

      navigate('/');
    } catch (error: any) {
      dispatch(
        setNotification({
          message: 'Sign up failed!',
          severity: 'error',
          open: true,
        })
      );
    }
  };

  const incomplete =
    !name || !email || !password || emailError || passwordError;

  return (
    <Container maxWidth="xs">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4">
            Sign up for a free account today!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            error={nameError}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSignup();
              }
            }}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="organization"
            label="Organization (optional)"
            variant="outlined"
            fullWidth
            value={organization}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSignup();
              }
            }}
            autoComplete="off"
            inputProps={{
              autoComplete: 'new-password',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            error={emailError}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSignup();
              }
            }}
            autoComplete="off"
            inputProps={{
              autoComplete: 'new-password',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={passwordError}
            helperText={passwordError && 'Needs to be a strong password'}
            value={password}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSignup();
              }
            }}
            autoComplete="off"
            inputProps={{
              autoComplete: 'new-password',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
            disabled={incomplete}
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography>
            Already have an account?{' '}
            <Button
              onClick={handleShowLogin}
              variant="text"
              sx={{
                textDecoration: 'underline',
                textTransform: 'capitalize',
              }}
            >
              Login
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Signup };
