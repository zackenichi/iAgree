import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Set min-height to 100vh for vertical centering
      }}
    >
      <Container maxWidth="md" data-testid="app-container">
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
          }}
        >
          <Typography variant="h1" align="center">
            React + TypeScript + MUI v5 + React-Redux toolkit
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
