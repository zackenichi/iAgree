import { ReactElement, FC } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { List as AgreementList } from '../components/List';
import { NoItems } from '../components/UI';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setMode, setOpenDrawer } from '../store/UiReducer';
import { AddScreen } from '../components/AddScreen';
import EditScreen from '../components/EditScreen/EditScreen';
import { SideDrawer } from '../components/SideDrawer';

const Agreements: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector(
    (state: RootState) => state.auth.currentUser
  );
  const agreementList = useSelector((state: RootState) => state.agreement.list);
  const mode = useSelector((state: RootState) => state.ui.mode);

  console.log('user', loggedInUser);

  const handleCreate = () => {
    dispatch(setMode('create'));
    dispatch(setOpenDrawer(true));
  };

  return (
    <>
      <Grid item md={6} xs={12}>
        <Typography variant="h1">Agreements</Typography>
      </Grid>
      <Grid item md={6} xs={12} sx={{ textAlign: { md: 'right', xs: 'left' } }}>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={handleCreate}
        >
          Create
        </Button>
      </Grid>
      <Grid item xs={12}>
        {agreementList.length ? (
          <AgreementList data={agreementList} />
        ) : (
          <NoItems handleCreate={handleCreate} />
        )}
      </Grid>
      <SideDrawer handleClose={() => dispatch(setOpenDrawer(false))}>
        {mode === 'create' ? <AddScreen /> : <EditScreen />}
      </SideDrawer>
    </>
  );
};

export default Agreements;
