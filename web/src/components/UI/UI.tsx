import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

interface NoItemsProps {
  handleCreate?: () => void;
}

const NoItems: FC<NoItemsProps> = ({ handleCreate }) => {
  return (
    <Grid container spacing={2} marginTop="50px">
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          No items found
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" textAlign="center" onClick={handleCreate}>
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
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="flex-end"
      sx={{ flexWrap: 'wrap' }}
    >
      <Grid item xs={6}>
        {total ? <ThumbUpOffAltIcon fontSize="small" /> : ''}
      </Grid>
      <Grid item xs={2}>
        <Typography>{approved ? approved : ''}</Typography>
      </Grid>
      <Grid item xs={2}>
        {total ? '/' : ''}
      </Grid>
      <Grid item xs={2}>
        <Typography>{total || ''}</Typography>
      </Grid>
    </Grid>
  );
};

export { NoItems, ApprovalRate };
