import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CusTop from '../CustomerPage/CusTop';
import store from '../../store';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Foody Web
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
    const state=store.getState()
  const [data,setData] = useState([])
  const fetchData = async() => {
      const response = await axios.get('http://127.0.0.1:8000/restaurant/')
      const res = await response.data
      console.log(res)
      setData(res)
  }
  useEffect(() => {
      fetchData()
  },[])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CusTop/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Browse through our Restaurants
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Do yourself a favor and visit this tiny sandbox of restaurants. Live far away? Don't worry..
              We guarantee the same experience...:
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((x) => (
              <Grid item key={x?.GST_no} xs={12} sm={6} md={4}>
                <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={event => window.location.href = `/menu/${x.GST_no}`}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '8.25%',
                    }}
                    image="https://cdn.vox-cdn.com/thumbor/p-5xkpqxJTIjMaPSa8S-Ps2c_xo=/0x0:5996x4003/920x690/filters:focal(1003x1633:1961x2591):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59732085/2021_03_23_Merois_008.12.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {x?.Name}
                    </Typography>
                    <Typography>
                      {x?.Description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Contact us at : foodyweb050@gmail.com
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}