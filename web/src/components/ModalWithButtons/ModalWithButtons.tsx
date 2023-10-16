import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ModalWithButtonsProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const ModalWithButtons: FC<ModalWithButtonsProps> = ({
  title,
  open,
  handleClose,
  handleConfirm,
}) => {
  const preview = useSelector((state: RootState) => state.agreement.preview);
  const { name: agreementTitle } = preview;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 2,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <Typography variant="h3">{title}</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{agreementTitle}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Are you sure you want to delete this agreement?
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="right">
            <Button variant="contained" color="warning" onClick={handleConfirm}>
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export { ModalWithButtons };
