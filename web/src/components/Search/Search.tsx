import { FC, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useIsSmallScreen } from '../../hooks';

const Search: FC = () => {
  const [search, setSearch] = useState<string>('');

  const isSmallScreen = useIsSmallScreen();

  const handleSearch = () => {
    console.log(search);
  };

  const handleClear = () => {
    setSearch('');
  };

  return (
    <Box>
      <TextField
        variant="outlined"
        placeholder="Search…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        inputProps={{
          'aria-label': 'search',
          autoComplete: 'new-password',
          sx: {
            // color: 'white',
            transition: 'width 120ms ease-out',
            width: { md: '100px', xs: '90px' },
            '&:focus': { width: isSmallScreen ? '90px' : '250px' },
          },
        }}
        InputProps={{
          sx: { height: '2.5rem' },
          endAdornment: (
            <InputAdornment position="end">
              {search ? (
                <IconButton onClick={handleClear}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              ) : (
                <SearchIcon fontSize="small" />
              )}
            </InputAdornment>
          ),
          autoComplete: 'off',
          // change this later - as this would be an autocomplete search
          onClick: handleSearch,
        }}
      />
    </Box>
  );
};

export { Search };
