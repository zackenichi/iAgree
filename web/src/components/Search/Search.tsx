import { FC, useRef } from 'react';
import { Box, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search: FC = () => {
  const searchRef = useRef<TextFieldProps>(null);

  const handleSearch = () => {
    const search = searchRef.current?.value;

    console.log(search);
  };

  return (
    <Box>
      <TextField
        variant="outlined"
        placeholder="Search…"
        inputRef={searchRef}
        inputProps={{
          'aria-label': 'search',
          autoComplete: 'new-password',
          sx: {
            // color: 'white',
            transition: 'width 120ms ease-out',
            width: '100px',
            '&:focus': { width: '250px' },
          },
        }}
        InputProps={{
          sx: { height: '2.5rem' },
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
          autoComplete: 'off',
          onClick: handleSearch,
        }}
      />
    </Box>
  );
};

export { Search };
