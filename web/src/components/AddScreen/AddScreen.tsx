import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '../Divider';

interface AddScreenProps {
  open: boolean;
  handleClose: () => void;
}

const AddScreen: FC<AddScreenProps> = ({ open, handleClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ width: { md: 400, xs: '100vw' } }} p={4}>
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
              placeholder="What should we agree about?"
              variant="outlined"
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <TextField
                autoComplete="off"
                fullWidth
                placeholder="Description"
                multiline
                minRows={4}
                maxRows={Infinity}
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
            <Button variant="contained" fullWidth>
              Create
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export { AddScreen };
