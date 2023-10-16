import { FC, useState } from 'react';

import { setNotification, setOpenDrawer } from '../../store/Reducers';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { RootState } from '../../store';
import { Divider } from '../Divider';
import { ModalWithButtons as DeleteConfirmation } from '../ModalWithButtons';
import { deleteAgreement } from '../../services';

const EditScreen: FC = () => {
  const dispatch = useDispatch();

  const [deleteOpen, setDeleteOpen] = useState(false);

  const preview = useSelector((state: RootState) => state.agreement.preview);
  const { name, description } = preview;

  const handleClose = () => {
    dispatch(setOpenDrawer(false));
  };

  // need RTK query to reload the list of agreements after deleting one

  const confirmDelete = () => {
    try {
      if (!preview.id) {
        throw new Error('No agreement selected');
      }

      deleteAgreement(preview.id);

      dispatch(
        setNotification({
          message: 'Agreement deleted',
          severity: 'success',
          open: true,
        })
      );

      dispatch(setOpenDrawer(false));
    } catch (error: any) {
      dispatch(
        setNotification({
          message: 'Deletion failed!',
          severity: 'error',
          open: true,
        })
      );
    }
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} textAlign="right">
          <IconButton onClick={() => setDeleteOpen(true)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ overflowWrap: 'break-word' }}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ overflowWrap: 'break-word' }}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Activity</Typography>
        </Grid>
      </Grid>
      <DeleteConfirmation
        title={`Delete agreement`}
        open={deleteOpen}
        handleClose={() => setDeleteOpen(false)}
        handleConfirm={confirmDelete}
      />
    </>
  );
};

export default EditScreen;
