import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '../Divider';
import { useDispatch } from 'react-redux';
import { createAgreement } from '../../store/AgreementReducer';

import { SideDrawer } from '../SideDrawer';

interface AddScreenProps {
  handleClose: () => void;
}

const AddScreen: FC<AddScreenProps> = ({ handleClose }) => {
  const dispatch = useDispatch();

  const testAgreement = {
    id: '1',
    name: 'Agreement 1',
    description: 'This is the first agreement',
    status: 'Waiting',
    approvals: [],
  };

  const handleCreate = () => {
    dispatch(createAgreement(testAgreement));
    handleClose();
  };

  return (
    <SideDrawer>
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
          />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <TextField
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
          <Button variant="contained" fullWidth color="secondary">
            Clear
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" fullWidth onClick={handleCreate}>
            Create
          </Button>
        </Grid>
      </Grid>
    </SideDrawer>
  );
};

export { AddScreen };
