import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CusTop from '../CustomerPage/CusTop';
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

const theme = createTheme();

export default function Album() {
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
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((x) => (
              <Grid item key={x?.GST_no} xs={12} sm={6} md={4}>
                <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={event => window.location.href = `/menu/${x.GST_no}`}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '8.25%',
                    }}
                    image={x.Url}
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
    </ThemeProvider>
  );
}