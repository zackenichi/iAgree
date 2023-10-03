import { Grid } from '@mui/material';
import { FC } from 'react';
import { SummaryCard } from '../Card';
import { Agreement } from '../../resources/interfaces/Agreement';

interface ListProps {
  data: Agreement[];
}

const List: FC<ListProps> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item md={3} xs={12} key={item.id}>
          <SummaryCard
            title={item.name}
            status={item.status}
            approvals={item.approvals}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export { List };
