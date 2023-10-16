import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '../Divider';
import { useDispatch, useSelector } from 'react-redux';

import { createAgreement } from '../../services';

import { RootState } from '../../store';
import { Approval } from '../../resources/interfaces/Approvals';
import {
  setLoading,
  setNotification,
  setOpenDrawer,
} from '../../store/Reducers';

const AddScreen: FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.currentUser);

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClose = () => {
    dispatch(setOpenDrawer(false));
  };

  const handleCreate = async () => {
    try {
      dispatch(setLoading(true));
      if (!name) {
        throw new Error('Name is required');
      }

      const selfApproval: Approval = {
        id: user?.id || '',
        name: user?.name || '',
        status: true,
        updatedAt: new Date().toISOString(),
      };

      const newAgreement = {
        name,
        description: description || '',
        status: 'Waiting',
        approvals: [selfApproval],
      };

      await createAgreement(newAgreement);

      dispatch(setLoading(false));
      dispatch(
        setNotification({
          message: 'New agreement created!',
          severity: 'success',
          open: true,
        })
      );

      dispatch(setOpenDrawer(false));
      handleClear();
      setHasError(false);
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(
        setNotification({
          message: error.message || 'Something went wrong',
          severity: 'error',
          open: true,
        })
      );
    }
  };

  // clears description
  const handleClear = () => {
    setHasError(false);
    setName('');
    setDescription('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Typography variant="h2">New Agreement</Typography>
      </Grid>
      <Grid item xs={2} textAlign="right">
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          placeholder="What is the agreement about?"
          variant="outlined"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={hasError}
        />
      </Grid>
      <Grid item xs={12}>
        <Box>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
            fullWidth
            placeholder="Details..."
            multiline
            minRows={4}
            maxRows={20}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={handleClear}
        >
          Clear
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained" fullWidth onClick={handleCreate}>
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export { AddScreen };
