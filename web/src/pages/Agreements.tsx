import { ReactElement, FC } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { List as AgreementList } from '../components/List';
import { NoItems } from '../components/UI';

import { AddScreen } from '../components/AddScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setOpenDrawer } from '../store/UiReducer';

const Agreements: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const agreementList = useSelector((state: RootState) => state.agreement.list);

  const handleOpenAdd = () => {
    dispatch(setOpenDrawer(true));
  };

  const handleCloseAdd = () => {
    dispatch(setOpenDrawer(false));
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
          onClick={handleOpenAdd}
        >
          Create
        </Button>
      </Grid>
      <Grid item xs={12}>
        {agreementList.length ? (
          <AgreementList data={agreementList} />
        ) : (
          <NoItems handleCreate={handleOpenAdd} />
        )}
      </Grid>

      <AddScreen handleClose={handleCloseAdd} />
    </>
  );
};

export default Agreements;
