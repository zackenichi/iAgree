import { Button, Container, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../firebase/firebase';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm: FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    return setFormFields(defaultFormFields);
  };

  const handleSubmit = async () => {
    try {
      // Send the email and password to firebase
      const userCredential = await signInUser(email, password);

      if (userCredential) {
        resetFormFields();
        navigate('/');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('User Sign In Failed', error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
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
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handleChange}
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
