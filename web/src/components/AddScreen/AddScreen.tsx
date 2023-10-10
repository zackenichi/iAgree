import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '../Divider';
import { useDispatch } from 'react-redux';
import { createAgreement } from '../../store/AgreementReducer';
import { SideDrawer } from '../SideDrawer';
import { v4 as uuidv4 } from 'uuid';

interface AddScreenProps {
  handleClose: () => void;
}

const AddScreen: FC<AddScreenProps> = ({ handleClose }) => {
  const dispatch = useDispatch();

  // using ref for name as we only need the value when creating
  const nameRef = useRef<HTMLInputElement | null>(null);
  // using state for description as we would be doing formatting options later
  // just using string for now
  const [description, setDescription] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleCreate = () => {
    if (nameRef?.current) {
      const name = nameRef.current?.value;
      // todo : add a error snackbar
      if (name === '') {
        setHasError(true);
        return;
      }

      const id = uuidv4();

      const newAgreement = {
        id,
        name,
        description: description || '',
        status: 'Waiting',
        approvals: [],
      };

      dispatch(createAgreement(newAgreement));
      setHasError(false);
      handleClose();
    }
  };

  // clears description
  const handleClear = () => {
    setDescription('');
  };

  return (
    <SideDrawer handleClose={handleClose}>
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
            inputRef={nameRef}
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
    </SideDrawer>
  );
};

export { AddScreen };
