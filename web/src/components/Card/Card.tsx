import { Paper } from '@mui/material';
import React, { FC } from 'react';

interface CardProps {
  children: React.ReactNode;
  sx?: {};
}

const Card: FC<CardProps> = ({ children, sx }) => {
  return (
    <Paper
      sx={{
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 2,
        borderRadius: '8px',
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export { Card };
