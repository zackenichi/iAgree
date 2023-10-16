import React, {
  FC,
  // useEffect
} from 'react';
import { Backdrop, CircularProgress } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setLoading } from '../store/Reducers';

const Loader: FC = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setLoading(false));
  };

  //   const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const loading = useSelector((state: RootState) => state.ui.loading);

  //   console.log(currentUser);

  //   useEffect(() => {
  //     if (!currentUser) {
  //       dispatch(setLoading(true));
  //     } else {
  //       dispatch(setLoading(false));
  //     }
  //   }, [currentUser, dispatch]);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export { Loader };
