import React from "react";
import { Grid, Button, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  }, []);
    const navigate =useNavigate()
   
  return (
    <div>
      {data.length === 0 ? (
        <h4>Nothing in Order</h4>
      ) : (
        <div>
          <h4>The Order Items:</h4>
          <Card>
            {data.map((x) => (
              <CardContent >
                <Grid container>
                        <Grid item xs={1}>
                            <h3>
                                {x?.Name}
                            </h3>
                    <img
                      src="http://chinabuffetatlantic.com/custom/3.jpg"
                      alt="food"
                      width="65px"
                      height="65px"
                    ></img>
                  </Grid>
                  <Grid item xs={10}>
                            <Typography variant="h6"></Typography>
                    
                  </Grid>
                  {/* <Grid item justifyContent="center" pt={2}>
                    <Button variant="contained" color="success"  onClick={()=>checkItems(x?.Food_Id)}>
                      Check Order
                    </Button>
                  </Grid> */}
                </Grid>
              </CardContent>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
