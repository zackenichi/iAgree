import { FC } from 'react';
import { Card } from './Card';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { Color } from '../../resources/types/types';
import { Approval } from '../../resources/interfaces/Approvals';
import { ApprovalRate } from '../UI';
import { setMode, setOpenDrawer } from '../../store/UiReducer';
import { useDispatch } from 'react-redux';
import { setPreview } from '../../store/AgreementReducer';

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

interface SummaryCardProps {
  id: string;
  title: string;
  status: string;
  description?: string;
  approvals?: Approval[];
}

const SummaryCard: FC<SummaryCardProps> = ({
  id,
  title,
  status,
  approvals,
  description,
}) => {
  const dispatch = useDispatch();

  const handlePreview = () => {
    // set data
    const entry = {
      id,
      name: title,
      description: description || '',
      status,
      approvals: approvals || [],
    };

    dispatch(setPreview(entry));

    dispatch(setMode('edit'));
    dispatch(setOpenDrawer(true));
  };

  return (
    <Box onClick={handlePreview}>
      <Card sx={{ cursor: 'pointer' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
            >
              {title}
            </Typography>
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
    </Box>
  );
};

export { SummaryCard, statusColor };
