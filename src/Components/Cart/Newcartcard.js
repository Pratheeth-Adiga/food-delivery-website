import React from "react";
import {
  Button,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  TextField,
  Divider,
} from "@mui/material";
import CusTop from "../CustomerPage/CusTop";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewCartCard() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const food = [];
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/cart1/${id}/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [qty, setQty] = useState(1);
  const deleteOne = (foodid) => {
    axios.delete(`http://127.0.0.1:8000/cartdeleteItem/${id}/${foodid}/`);
    window.location.reload(false);
  };
  const [price, setPrice] = useState(0);
  return (
    <div>
      <CusTop />
      <Grid container pt={2} pl={2} spacing={3}>
        <Grid item xs={7}>
          {data.length === 0 ? (
            <h2>
              Cart is empty :/
              <a href="/customerpage">Click here to go back</a>
            </h2>
          ) : (
            <></>
          )}
          <Paper elevation={5}>
            <Typography variant="h4" pl={2} pt={2} pb={2}>
              Cart - {data.length} items
            </Typography>
            <Card>
              {data.map((x, i) => {
                <CardContent>
                  <Grid container>
                    <Grid item>
                      <img
                        src="https://www.rd.com/wp-content/uploads/2018/12/shutterstock_1161597079.jpg"
                        alt="a"
                        width="120px"
                        height="120px"
                      ></img>
                    </Grid>
                    <Grid item pl={2}>
                      <Typography variant="h5">{x?.Name}</Typography>
                      <Typography variant="h6">{x?.Price}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>;
              })}
            </Card>

            <Card>
              <CardContent>
                {data.map((x) => {
                  <Grid container>
                    <Grid item>
                      <img
                        src="https://www.rd.com/wp-content/uploads/2018/12/shutterstock_1161597079.jpg"
                        alt="a"
                        width="120px"
                        height="120px"
                      ></img>
                    </Grid>
                    <Grid item pl={2}>
                      <Typography variant="h5">{x?.Name}</Typography>
                      <Typography variant="h7">Price=</Typography>
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteOne(x?.id)}
                      >
                        Remove
                      </Button>
                    </Grid>
                  </Grid>;
                })}
              </CardContent>
              ;
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={5}>
            <Card>
              <CardContent>
                <Typography variant="h5" pb={1} pl={1}>
                  Summary
                </Typography>
                <Divider />
                <Typography variant="body2" pt={1} pl={1}>
                  Total Price: Rs.
                  {data
                    .reduce((acc, item) => acc + 1 * item.Price, 0)
                    .toFixed(2)}
                </Typography>
                <Typography variant="body2" pt={1} pl={1}>
                  Delivery Charges: $0.00
                </Typography>
                <Divider />
                <Typography variant="body2" pt={1} pl={1}>
                  Total Amount: Rs.
                  {data
                    .reduce((acc, item) => acc + 1 * item.Price, 0)
                    .toFixed(2)}
                </Typography>
                <Grid container justifyContent="flex-end" pt={2}>
                  <Button color="success" variant="contained">
                    Checkout
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>

      <Grid container pt={3} pl={2}>
        <Grid item xs={7}>
          <Paper elevation={5}>
            <Typography variant="h5" pl={2} pt={2}>
              Expected Delivery
            </Typography>
            <Divider />
            <Typography variant="body1" pl={2} pt={2} pb={2}>
              Within 50 mins
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
