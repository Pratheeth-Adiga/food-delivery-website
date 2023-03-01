import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function Bar() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
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

const top100Films = [
  { title: 'Adigas', year: 1994 },
  { title: 'Mayas', year: 1972 },
  { title: 'Benne dose', year: 1974 }
];