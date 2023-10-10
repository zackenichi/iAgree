import { FC } from 'react';
import { SideDrawer } from '../SideDrawer';
import { setOpenDrawer } from '../../store/UiReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { RootState } from '../../store';
import { Divider } from '../Divider';

const EditScreen: FC = () => {
  const dispatch = useDispatch();

  const preview = useSelector((state: RootState) => state.agreement.preview);
  const { name, description } = preview;

  const handleClose = () => {
    dispatch(setOpenDrawer(false));
  };

  return (
    <SideDrawer handleClose={handleClose}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} textAlign="right">
          <IconButton>
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
    </SideDrawer>
  );
};

export default EditScreen;
