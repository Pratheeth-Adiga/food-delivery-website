import * as React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import store from '../../store';


export default function FoodCards() {
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
    <div >
      <Grid container spacing={1} pt={4} pl={5} Spacing={2}>
          {data.map((x) => {
            return (
              <Grid pr={10}>
              <Card sx={{ maxWidth: 800 }} key={x?.GST_no} onClick={event =>  window.location.href=`/menu/${x.GST_no}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://cdn.vox-cdn.com/thumbor/p-5xkpqxJTIjMaPSa8S-Ps2c_xo=/0x0:5996x4003/920x690/filters:focal(1003x1633:1961x2591):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59732085/2021_03_23_Merois_008.12.jpg"
                    alt="restuarant"
                  />
                  <CardContent>
          
                    <Typography gutterBottom variant="h5" component="div">
                      {x?.Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {x?.Description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
          )
        }
        )
        } 
        </Grid>
      
      {/* <h1>hey</h1> */}
    </div>
      
  );
};