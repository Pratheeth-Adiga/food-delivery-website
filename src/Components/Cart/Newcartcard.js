import React from "react";
import {
  Button,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import CusTop from "../CustomerPage/CusTop";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

let deliveryTime = Math.floor((Math.random() * 10) + 10);
let DeliveryCharges = Math.floor((Math.random() * 12.6) + 6)

export default function NewCartCard() {
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
  });
  const deleteOne = (foodid) => {
    axios.delete(`http://127.0.0.1:8000/cartdeleteItem/${id}/${foodid}/`);
    window.location.reload(false);
  };
  const deleteAll = () => {
    console.log("here");
    axios.delete(`http://127.0.0.1:8000/cartdelete/${id}/`);
    window.location.reload(false);
  };
  const navigate = useNavigate();
  const checkout = () => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div>
      <CusTop />
      <Grid container pt={2} pl={2} spacing={3}>
        <Grid item xs={7}>
          {data.length === 0 ? (
            <h2>
              Cart is empty :/
              <a href="/album">Click here to go back</a>
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
                return (
                  <CardContent>
                    <Grid container>
                      <Grid item>
                        <img
                          src={x?.Url}
                          alt="a"
                          width="120px"
                          height="120px"
                        ></img>
                      </Grid>
                      <Grid item pl={2}>
                        <Typography variant="h5">{x?.Name}</Typography>
                        <Typography variant="h8">
                          Price: Rs.{x?.Price}
                        </Typography>
                       
                      </Grid>
                      <Grid item xs={7}></Grid>
                      <Grid container justifyContent="flex-end" pt={2}>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => deleteOne(x?.id)}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                );
              })}
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
                  Delivery Charges: Rs {DeliveryCharges.toFixed(2)}
                </Typography>
                <Divider />
                <Typography variant="body2" pt={1} pl={1}>
                  Total Amount: Rs.
                  {data
                    .reduce((acc, item) => acc + 1 * item.Price + DeliveryCharges/data.length, 0)
                    .toFixed(2)}
                </Typography>
                <Grid container justifyContent="flex-end" pt={2}>
                  <Button
                    color="success"
                    variant="contained"
                    onClick={checkout}
                  >
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
              Within {deliveryTime} mins
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container pt={3} pl={2}>
        <Button
          pt={3}
          pl={2}
          variant="contained"
          color="error"
          onClick={() => deleteAll()}
        >
          Remove all items
        </Button>
      </Grid>
    </div>
  );
}
