import * as React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid } from '@mui/material';

export default function ActionAreaCard() {
  const [data,setData] = useState([])
  const fetchData = async() => {
      const response = await axios.get('http://127.0.0.1:8000/restaurants')
      const res = await response.data
      console.log(res)
      setData(res)
  }
  useEffect(() => {
      fetchData()
  },[])
  return (
    <Grid>
      {data.map((x) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={x?.GST_no}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="https://www.sagephotographystudio.com/img/s/v-10/p1875786421-4.jpg"
                alt="kokre"
              />
              <CardContent>
         
                <Typography gutterBottom variant="h5" component="div">
                  {x?.GST_no}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {x?.Description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
      </Grid>
  );
}