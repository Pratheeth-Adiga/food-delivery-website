import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme();

export default function NewItem() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);;
  };

  const [file, setFile] = useState();
  function handleChange(e) {
  console.log(e.target.files);
  setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            R
          </Avatar>
          <Typography component="h1" variant="h5">
            Restaurent
          </Typography> */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

            <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="foodname"
                  label="Food Name"
                  name="foodname"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  multiline="true"
                  rows="5"
                  fullWidth
                  id="desc"
                  label="Description"
                  name="desc"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                />
              </Grid>

              <Grid item xs={12}>
              <Typography 
              variant="body1">
                Food Image Upload
              </Typography>
                <input type="file" onChange={handleChange} />
              <img src={file} alt=""/>
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Add Item
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}