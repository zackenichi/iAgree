import { FC } from 'react';
import { Card } from './Card';
import { Chip, Grid, Typography } from '@mui/material';
import { Color } from '../../resources/types/types';
import { Approval } from '../../resources/interfaces/Approvals';
import { ApprovalRate } from '../UI';

interface SummaryCardProps {
  title: string;
  status: string;
  approvals?: Approval[];
}

const statusColor = (status: string): Color => {
  switch (status) {
    case 'Approved':
      return 'success';
    case 'Rejected':
      return 'warning';
    default:
      return 'info';
  }
};

const getApprovalRate = (approval: Approval[]): number => {
  const approved = approval.filter((item) => item.status === true);
  return approved.length;
};

const SummaryCard: FC<SummaryCardProps> = ({ title, status, approvals }) => {
  return (
    <Card sx={{ cursor: 'pointer' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={6}>
          <Chip label={status} color={statusColor(status)} />
        </Grid>
        <Grid item xs={6}>
          <ApprovalRate
            approved={getApprovalRate(approvals || [])}
            total={approvals?.length || 0}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export { SummaryCard, statusColor };
