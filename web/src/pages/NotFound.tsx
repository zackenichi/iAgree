import { ReactElement, FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import notfound from '../assets/img/notfound.png';
import { useNavigate } from 'react-router-dom';

const NotFound: FC<any> = (): ReactElement => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box textAlign="center">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Error 404</Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={notfound} alt="not-found" height="300px" width="300px" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" onClick={handleReturn}>
              Go back home
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NotFound;
