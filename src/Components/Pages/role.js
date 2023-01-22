import * as React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import store from '../../store';


export default function Role() {
  const state=store.getState()
 const data =["Customer","Restaurant"]
  return (
    <div >
      <Grid container spacing={1} pt={4} pl={5} Spacing={2}>
          
              <Grid pr={10}>
                  <Card sx={{ maxWidth: 800 }} onClick={event => window.location.href = `/customerpage`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://thumbs.dreamstime.com/b/eating-linear-icon-modern-outline-eating-logo-concept-white-eating-linear-icon-modern-outline-eating-logo-concept-white-133513739.jpg"
                    alt="restuarant"
                  />
                  <CardContent>
          
                    <Typography gutterBottom variant="h5" component="div">
                      Customer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Browse through all our delicious menu
                    </Typography>
                  </CardContent>
                </CardActionArea>
                  </Card>
                  <Card sx={{ maxWidth: 800 }} onClick={event => window.location.href = `/restaurantpage`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX32422444.jpg"
                    alt="restuarant"
                  />
                  <CardContent>
          
                    <Typography gutterBottom variant="h5" component="div">
                      Restaurant
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                                  Post about your restaurants delicacies
                                  
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
          
        </Grid>
      
      {/* <h1>hey</h1> */}
    </div>
      
  );
};