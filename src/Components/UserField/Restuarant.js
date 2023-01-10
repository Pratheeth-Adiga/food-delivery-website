import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Food Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function Restuarant() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            D
          </Avatar>
          <Typography component="h1" variant="h5">
            Username
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid> */}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  name="gst"
                  label="GST Number"
                  id="gst"
                />
              </Grid>

              <Grid item xs={12}>
              <TextField 
              required 
              fullWidth
              name = "Phone Number"
              label = "Phone Number"
              id = "phoneNumber"/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  multiline="true"
                  rows="3"
                  fullWidth
                  required
                  name="address"
                  label="Address"
                  id="address"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  multiline="false"
                  rows="3"
                  fullWidth
                  required
                  name="city"
                  label="City"
                  id="city"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mgrname"
                  label="Manager Name"
                  name="mgrname"
                />
              </Grid>

              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mgrphno"
                  label="Manager Phone Number"
                  name="mgrphno"
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
              <Typography 
              variant="body1">
                Restuarant Image Upload
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
              Edit
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}