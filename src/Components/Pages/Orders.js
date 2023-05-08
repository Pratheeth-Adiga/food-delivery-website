import React from "react";
import { Grid, Typography, Card, CardContent,Paper } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Orders() {
  const { id,oid } = useParams();
    console.log(oid)
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/restItems/${id}/${oid}/`);
    const res = await response.data;
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    fetchData();
    console.log(typeof data);
  });
   
  return (
    <div>
      {data.length === 0 ? (
        <h4>Nothing in Order</h4>
      ) : (
        <div>
          <Typography variant="h4" pt={3} pb={4} pl={2}>The Orders which are Pending:</Typography>
          <Paper elevation={2}>
          <Card>
            {data.map((x) => (
              <CardContent>
                <Grid container>
                    <Grid item xs={2} pl={5}>
                    <img
                      src={x?.Url}
                      alt="food"
                      width="100px"
                      height="100px"
                    >
                    </img>
                    </Grid>
                    <Grid item xs={3} pt={2}>
                            <Typography variant="h5">
                                {x?.Name}
                            </Typography>
                            <Typography variant="body">
                                 Quantity: 1
                            </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
              </CardContent>
            ))}
          </Card>
          </Paper>
        </div>
      )}
    </div>
  );
}
