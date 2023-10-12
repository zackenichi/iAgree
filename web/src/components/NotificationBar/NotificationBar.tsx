import { Alert, Snackbar } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { hideNotification } from '../../store/NotificationReducer';

const NotificationBar: FC = () => {
  const { open, message, severity } = useSelector(
    (state: RootState) => state.notification
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideNotification());
  };

  return (
    <Snackbar open={!!open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export { NotificationBar };
