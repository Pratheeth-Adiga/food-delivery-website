import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Foody Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function NotRegistered() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Access Denied:
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'This page is only meant for Restaurants registered under our company. '}
          {'To become a registered user please email us at foodyweb050@gmail.com'}
        </Typography>
              <Typography variant="body1"> </Typography>
              <Button variant="contained" color="success" href='/album'>
                      Browse our restaurants
                    </Button>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Visit our page at:
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}