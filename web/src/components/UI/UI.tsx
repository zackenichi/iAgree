import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import DoneIcon from '@mui/icons-material/Done';

const NoItems: FC = () => {
  return (
    <Grid container spacing={2} marginTop="50px">
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          No items found
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" textAlign="center">
          Try creating a new item
        </Typography>
      </Grid>
    </Grid>
  );
};

const ApprovalRate: FC<{ approved: number; total: number }> = ({
  approved,
  total,
}) => {
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="flex-end">
      <Grid item xs={2}>
        <DoneIcon />
      </Grid>
      <Grid item xs={1}>
        <Typography>{approved}</Typography>
      </Grid>
      <Grid item xs={1}>
        /
      </Grid>
      <Grid item xs={1}>
        <Typography>{total}</Typography>
      </Grid>
    </Grid>
  );
};

export { NoItems, ApprovalRate };
