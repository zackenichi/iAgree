import { Button, Container, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../firebase/firebase';
import { isValidEmail, isValueEmpty } from '../../utils/input';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../store/NotificationReducer';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    return setFormFields(defaultFormFields);
  };

  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      // Send the email and password to firebase
      const userCredential = await signInUser(email, password);

      if (userCredential) {
        resetFormFields();
        dispatch(
          setNotification({
            message: 'Login Successful!',
            severity: 'success',
            open: true,
          })
        );
        navigate('/');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('User Sign In Failed', error.message);
      dispatch(
        setNotification({
          message: 'Invalid credentials. Please try again.',
          severity: 'error',
          open: true,
        })
      );
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'email') {
      if (!isValidEmail(value) || isValueEmpty(value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (name === 'password') {
      if (isValueEmpty(value)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Container maxWidth="xs">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Username"
            variant="outlined"
            fullWidth
            value={email}
            error={emailError}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={passwordError}
            value={password}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { LoginForm };
