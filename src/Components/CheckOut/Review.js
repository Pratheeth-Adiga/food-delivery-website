import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const addresses = ['1st Cross', 'RR Nagar', 'Bengaluru', '99999', 'India'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr Ganesh' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/cart1/${id}/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {data.map((product) => (
          <ListItem key={product.Name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.Name} secondary={product.Tag} />
            <Typography variant="body2">Rs. {product.Price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Rs. {data.reduce((acc, item) => acc + 1 * item.Price, 0).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
           
          </Typography>
          {/* <Typography gutterBottom>Ganesh</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
        </Grid>
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid> */}
        </Grid>
      
    </React.Fragment>
  );
}