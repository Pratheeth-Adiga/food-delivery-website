import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="hotel search"
        disableClearable
        options={Hotels.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            size='small'
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

const Hotels = [
  { title: 'Adigas'},
  { title: 'Chat Corner'},
  { title: 'Pizza Corner'},
  { title: 'Udupi Hotel'}
];